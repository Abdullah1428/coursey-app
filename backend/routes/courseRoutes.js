import express from 'express';
const router = express.Router();

import {
  getAllCourses,
  getCourseDetail,
} from '../controllers/courseController.js';

router.route('/course/:id').get(getCourseDetail);
router.route('/courses').get(getAllCourses);

export default router;
