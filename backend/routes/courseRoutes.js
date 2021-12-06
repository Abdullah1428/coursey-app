import express from 'express';
const router = express.Router();

import {
  getAllCourses,
  getCourseDetail,
} from '../controllers/courseController.js';

router.route('/courses').get(getAllCourses);
router.route('/course/:id').get(getCourseDetail);

export default router;
