import express from 'express';
const router = express.Router();

import { login, register, logout } from '../controllers/authController.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);

export default router;
