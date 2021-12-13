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

const addFeedbackForCourse = asyncHandler(async (req, res) => {
  const feedbackCollectionRef = collection(db, 'feedback');

  const { uid, course, title, review, rating } = req.body;

  try {
    await addDoc(feedbackCollectionRef, {
      uid,
      course,
      title,
      review,
      rating: Number(rating),
      createdAt: serverTimestamp(),
    });

    res.status(201).send('feedback added');
  } catch (error) {
    res.status(404).send('Firebase error!');
  }
});

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

const getUserActivity = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const q = query(
      collection(db, 'feedback'),
      where('uid', '==', id),
      limit(3)
    );

    //orderBy not working when user has no feedbacks

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

const updateProfileDetailsfromAPI = asyncHandler(async (req, res) => {
  const uid = req.body.uid;
  try {
    const docRef = doc(db, 'users', uid);

    const status = await updateDoc(docRef, {
      name: req.body.name,
      program: req.body.program,
      school: req.body.school,
      year: req.body.year,
    });
    console.log(status);
    res.json(status);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getAllFeedbacks,
  addFeedbackForCourse,
  getFeedbacksByCourseId,
  getUserActivity,
  getProfileDetailsFromAPI,
  updateProfileDetailsfromAPI,
};

// to get specific doc
// const feedback doc = doc(db, collectionName, id)
