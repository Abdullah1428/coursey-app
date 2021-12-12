import asyncHandler from 'express-async-handler';

import { db } from './authController.js';

import { collection, getDocs, addDoc, query, where } from '@firebase/firestore';

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

  const { course, title, review, rating } = req.body;

  try {
    await addDoc(feedbackCollectionRef, { course, title, review, rating });

    res.status(201);
  } catch (error) {
    res.status(400).send('Firebase error!');
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

export { getAllFeedbacks, addFeedbackForCourse, getFeedbacksByCourseId };

// to get specific doc
// const feedback doc = doc(db, collectionName, id)
