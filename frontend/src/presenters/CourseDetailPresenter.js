import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

import { CourseDetailView, CourseReviews } from '../views/CourseDetailView';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CourseDetailPresenter = ({ match }) => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [courseReviews, setCourseReviews] = useState([]);

  // api calling states for course
  const [errorCourse, setErrorCourse] = useState('');
  const [loadingCourse, setLoadingCourse] = useState(false);
  // api callling states for reviews
  const [errorReviews, setErrorReviews] = useState('');
  const [loadingReviews, setLoadingReviews] = useState(false);

  // context
  const { currentUser } = useAuth();

  // location to receive search Results and Query
  const location = useLocation();

  const { searchQuery } = location.state ? location.state : '';
  const { searchResults } = location.state ? location.state : [];

  const getCourseDataFromAPI = useCallback(async () => {
    setLoadingCourse(true);
    try {
      let apiUrl = `/api/course/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      setCourseDetail(data);
      setLoadingCourse(false);
    } catch (error) {
      setErrorCourse('Error in getting course details');
      setLoadingCourse(false);
    }
  }, [match]);

  const getFeedbacksForCourse = useCallback(async () => {
    setLoadingReviews(true);
    try {
      let apiUrl = `/user/reviews/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      setCourseReviews(data);
      setLoadingReviews(false);
    } catch (error) {
      setErrorReviews('Error in getting course reviews');
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
      alert(
        'Please write a proper review with rating which can be helpful for others'
      );
      return;
    } else if (Number(rating) < 1) {
      alert('Please select a proper rating for this course from 1-5.');
      return;
    } else if (review.length < 10) {
      alert('Please write a proper comment which can be helpful for others');
      return;
    } else {
      try {
        let apiUrl = `/user/course/feedback`;

        let feedback = {
          uid: currentUser.uid,
          course: match.params.id,
          title: title,
          review: review,
          rating: rating,
        };

        const { data } = await axios.post(apiUrl, feedback);

        if (data === 'feedback added') {
          alert('Feedback Submitted successfully, Thank you for the review');
          getFeedbacksForCourse();
        }
      } catch (error) {
        console.log('Error in feedback submission ', error.message);
      }
    }
  };

  return (
    <>
      {errorCourse ? (
        <Message>{errorCourse}</Message>
      ) : loadingCourse ? (
        <Loader />
      ) : (
        courseDetail && (
          <>
            <Link
              className='btn btn-dark my-3'
              to={{
                pathname: `/courses`,
                state: {
                  query: searchQuery,
                  results: searchResults,
                },
              }}
            >
              Go Back
            </Link>
            <CourseDetailView courseDetail={courseDetail} />
          </>
        )
      )}

      {errorReviews ? (
        <Message>{errorReviews}</Message>
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
