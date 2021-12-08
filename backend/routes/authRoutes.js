import express from 'express';
const router = express.Router();

import { login, register, logout } from '../controllers/authController.js';

router.route('/register').get(register);
router.route('/login').get(login);
router.route('/logout').get(logout);

export default router;
