import asyncHandler from 'express-async-handler';

import { db } from './authController.js';

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  addDoc,
  serverTimestamp,
  limit,
  orderBy,
} from '@firebase/firestore';

/*
 *   @desc   get all feedbacks
 *   @route  GET /user/feedbacks/all
 */
const getAllFeedbacks = asyncHandler(async (_req, res) => {
  const feedbackCollectionRef = collection(db, 'feedback');

  try {
    const data = await getDocs(feedbackCollectionRef);

    const d = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    res.json(d);
  } catch (error) {
    res.status(400).send('Firebase error!');
  }
});

/*
 *   @desc   get popular courses on the basis of average feedback
 *   @route  GET /user/feedbacks/popular
 */
const getPopularCourses = asyncHandler(async (_req, res) => {
  try {
    const q = query(
      collection(db, 'feedback'),
      orderBy('averageRating', 'desc')
    );

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    res.json(data);
  } catch (error) {
    res.status(400).send('Firebase error!');
  }
});

/*
 *   @desc   add a feedback for course
 *   @route  POST /user/course/feedback
 */
const addFeedbackForCourse = asyncHandler(async (req, res) => {
  const feedbackCollectionRef = collection(db, 'feedback');

  const {
    uid,
    username,
    course,
    courseTitle,
    title,
    review,
    rating,
    averageRating,
    totalFeedbacks,
  } = req.body;

  try {
    await addDoc(feedbackCollectionRef, {
      uid,
      username,
      course,
      courseTitle,
      title,
      review,
      rating: Number(rating),
      averageRating: Number(averageRating),
      totalFeedbacks: Number(totalFeedbacks),
      createdAt: serverTimestamp(),
    });

    res.status(201).send('feedback added');
  } catch (error) {
    res.status(404).send('Firebase error!');
  }
});

/*
 *   @desc   get a feedback for course by course code
 *   @route  GET /user/reviews/:id
 */
const getFeedbacksByCourseId = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const q = query(collection(db, 'feedback'), where('course', '==', id));

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    res.json(data);
  } catch (error) {
    res.status(400).send('Firebase error!');
  }
});

/*
 *   @desc   get user activity or feedbacks for course
 *   @route  POST /user/activity
 */
const getUserActivity = asyncHandler(async (req, res) => {
  const id = req.body.uid;
  try {
    let q = query(collection(db, 'feedback'), where('uid', '==', id));

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    res.json(data);
  } catch (error) {
    res.status(404).send('Firebase error!');
  }
});

/*
 *   @desc   get user profile
 *   @route  POST /user/getprofile
 */
const getProfileDetailsFromAPI = asyncHandler(async (req, res) => {
  const uid = req.body.uid;
  try {
    const docRef = doc(db, 'users', uid);
    const snapShot = await getDoc(docRef);
    res.json(snapShot.data());
  } catch (error) {
    res.status(400).send(error.message);
  }
});

/*
 *   @desc   update user profile
 *   @route  POST /user/updateprofile
 */
const updateProfileDetailsfromAPI = asyncHandler(async (req, res) => {
  const uid = req.body.uid;
  try {
    const docRef = doc(db, 'users', uid);

    const status = await updateDoc(docRef, {
      name: req.body.name,
      program: req.body.program,
      school: req.body.school,
      year: req.body.year,
      username: req.body.username,
    });
    res.json(status);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getAllFeedbacks,
  getPopularCourses,
  addFeedbackForCourse,
  getFeedbacksByCourseId,
  getUserActivity,
  getProfileDetailsFromAPI,
  updateProfileDetailsfromAPI,
};

// to get specific doc
// const feedback doc = doc(db, collectionName, id)
