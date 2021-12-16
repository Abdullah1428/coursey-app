import express from 'express';
const router = express.Router();

import {
  login,
  register,
  logout,
  resetPassword,
} from '../controllers/authController.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/resetpassword').post(resetPassword);

export default router;
