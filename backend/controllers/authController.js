import asyncHandler from 'express-async-handler';

import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export const db = getFirestore(firebase);

const register = asyncHandler((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.json({ user });
    })
    .catch((error) => {
      res.status(404).send('firebase error');
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'There was an error in sign up: ' + errorCode + ' ' + errorMessage
      );
    });
});

const login = asyncHandler((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      res.json({ user });
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
