import express from 'express';
const router = express.Router();

import {
  getAllCourses,
  getCourseDetail,
  searchCourse,
} from '../controllers/courseController.js';

router.route('/courses').get(getAllCourses);
router.route('/course/:id').get(getCourseDetail);
router.route('/courses/:query').get(searchCourse);

export default router;
