import asyncHandler from 'express-async-handler';

import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export const db = getFirestore(firebase);

const register = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const data = {
      uid: user.uid,
      email: user.email,
    };
    console.log(user.uid);
    console.log(data);
    await setDoc(doc(db, 'users', user.uid), data);

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const login = asyncHandler((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const response = { email: user.email, uid: user.uid };

      res.json(response);
    })
    .catch((error) => {
      res.status(404).send('firebase error');

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'There was an error in sign in: ' + errorCode + ' ' + errorMessage
      );
    });
});

const logout = asyncHandler((req, res) => {
  signOut(auth)
    .then(() => {
      res.status(200).send('logged out');
    })
    .catch((error) => {
      res.status(404).send('firebase error');
      console.log('Error in signing out ' + error);
    });
});

export { register, login, logout };
