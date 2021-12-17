import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

import { CourseDetailView, CourseReviews } from '../views/CourseDetailView';
import Loader from '../components/Loader';
import Message from '../components/Message';
import AlertModal from '../components/AlertModal';

const CourseDetailPresenter = ({ match }) => {
  // for storing course detail from kth api
  const [courseDetail, setCourseDetail] = useState(null);
  // for storing feedback fields
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  // for storing couesw reviews fetched from firebase
  const [courseReviews, setCourseReviews] = useState(null);

  // api calling states for course
  const [errorCourse, setErrorCourse] = useState('');
  const [loadingCourse, setLoadingCourse] = useState(false);
  // api callling states for reviews
  const [errorReviews, setErrorReviews] = useState('');
  const [loadingReviews, setLoadingReviews] = useState(false);

  // alert modal state
  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState('danger');
  const [message, setMessage] = useState('');

  // context
  const { currentUser } = useAuth();

  // location to receive search Results and Query
  const location = useLocation();

  const { searchQuery } = location.state ? location.state : '';
  const { searchResults } = location.state ? location.state : [];
  const { path } = location.state ? location.state : '';

  const getCourseDataFromAPI = useCallback(async () => {
    setLoadingCourse(true);
    try {
      let apiUrl = `/api/course/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      setCourseDetail(data);
      setLoadingCourse(false);
    } catch (error) {
      setErrorCourse('Course details failed to load, try again.');
      setLoadingCourse(false);
    }
  }, [match]);

  const getFeedbacksForCourse = useCallback(async () => {
    setLoadingReviews(true);
    try {
      let apiUrl = `/user/reviews/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      let sorted = data.sort(function compareNumOfReviews(a, b) {
        let ai = new Date(a.createdAt.seconds);
        let bi = new Date(b.createdAt.seconds);

        return ai > bi ? -1 : ai < bi ? 1 : 0;
      });

      setCourseReviews(sorted);
      setLoadingReviews(false);
    } catch (error) {
      setErrorReviews('Course reviews failed to load, try again.');
      setLoadingReviews(false);
    }
  }, [match]);

  useEffect(() => {
    getCourseDataFromAPI();
    getFeedbacksForCourse();
  }, [getCourseDataFromAPI, getFeedbacksForCourse]);

  const submitUserFeedback = async () => {
    // submit here feedback to firebase.
    if (Number(rating) < 1 && review.length < 10) {
      setVariant('danger');
      setMessage(
        'Please write a review with rating which can be helpful for others.'
      );
      setShowAlert(true);
      return;
    } else if (Number(rating) < 1) {
      setVariant('danger');
      setMessage('Please select a rating for the course.');
      setShowAlert(true);
      return;
    } else if (review.length < 10) {
      setVariant('danger');
      setMessage('Please write a comment which can be helpful for others.');
      setShowAlert(true);
      return;
    } else {
      let averageRating = rating;
      courseReviews.map(
        (review) =>
          (averageRating = Number(averageRating) + Number(review.rating))
      );

      try {
        let apiUrl = `/user/course/feedback`;

        let feedback = {
          uid: currentUser.uid,
          username: currentUser.username,
          course: match.params.id,
          courseTitle: courseDetail.course.title,
          title: title,
          review: review,
          rating: rating,
          averageRating: averageRating / (courseReviews.length + 1),
          totalFeedbacks: courseReviews.length + 1,
        };

        const { data } = await axios.post(apiUrl, feedback);

        if (data === 'feedback added') {
          setVariant('success');
          setMessage(
            'Feedback submitted successfully, thank you for the review!'
          );
          setShowAlert(true);
          getFeedbacksForCourse();
        }
      } catch (error) {
        // console.log('Error in feedback submission ', error.message);
        setVariant('danger');
        setMessage('Feedback submission failed, try again.');
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <AlertModal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        title={'Feedback'}
        message={message}
        variant={variant}
      />

      {errorCourse && errorCourse.length > 0 ? (
        <Message hide={() => setErrorCourse('')}>{errorCourse}</Message>
      ) : loadingCourse ? (
        <Loader />
      ) : (
        courseDetail && (
          <>
            <Link
              className='btn btn-dark my-3'
              to={{
                pathname: path && path === 'home' ? '/' : `/courses`,
                state: {
                  query: searchQuery,
                  results: searchResults,
                },
              }}>
              Go Back
            </Link>
            <CourseDetailView courseDetail={courseDetail} />
          </>
        )
      )}

      {errorReviews && errorReviews.length > 0 ? (
        <Message hide={() => setErrorReviews('')}>{errorReviews}</Message>
      ) : loadingReviews ? (
        <Loader />
      ) : (
        courseReviews && (
          <CourseReviews
            rating={rating}
            review={review}
            title={title}
            courseReviews={courseReviews}
            userTitle={(title) => setTitle(title)}
            userRating={(rating) => setRating(rating)}
            userReview={(review) => setReview(review)}
            onSubmitReview={() => submitUserFeedback()}
            currentUser={currentUser}
          />
        )
      )}
    </>
  );
};

export default CourseDetailPresenter;
