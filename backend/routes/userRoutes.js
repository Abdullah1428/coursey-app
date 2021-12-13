import express from 'express';
const router = express.Router();

import {
  getAllFeedbacks,
  getFeedbacksByCourseId,
  addFeedbackForCourse,
  getUserActivity,
  getProfileDetailsFromAPI,
  updateProfileDetailsfromAPI,
} from '../controllers/userController.js';

router.route('/getProfile').post(getProfileDetailsFromAPI);
router.route('/updateProfile').post(updateProfileDetailsfromAPI);

router.route('/reviews/:id').get(getFeedbacksByCourseId);
router.route('/feedbacks/all').get(getAllFeedbacks);
router.route('/course/feedback').post(addFeedbackForCourse);
router.route('/activity/:id').get(getUserActivity);

export default router;
