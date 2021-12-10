import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

const register = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Current user signed up: ' + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'There was an error in sign up: ' + errorCode + ' ' + errorMessage
      );
    });
};

const login = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Current user signed in: ' + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'There was an error in sign in: ' + errorCode + ' ' + errorMessage
      );
    });
};

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out successfully');
    })
    .catch((error) => {
      console.log('Error in signing out ' + error);
    });
};

export { register, login, logout };
