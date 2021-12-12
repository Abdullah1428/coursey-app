import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CourseDetailView, CourseReviews } from '../views/CourseDetailView';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CourseDetailPresenter = ({ match }) => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      setLoading(true);
      try {
        let apiUrl = `/api/course/${match.params.id}`;

        const { data } = await axios.get(apiUrl);

        setCourseDetail(data);
        setLoading(false);
      } catch (error) {
        setError('Error in getting course details');
        setLoading(false);
      }
    };

    // const getFeedbacksForCourse = async (id) => {
    //   try {
    //     let apiUrl = `/user/reviews/${match.params.id}`;

    //     const { data } = await axios.get(apiUrl);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    getCourseDataFromAPI();
  }, [match]);

  const submitUserFeedback = () => {
    // submit here feedback to firebase.
  };

  return (
    <>
      {error ? (
        <Message>{error}</Message>
      ) : loading ? (
        <Loader />
      ) : (
        courseDetail && <CourseDetailView courseDetail={courseDetail} />
      )}

      <CourseReviews
        rating={rating}
        review={review}
        userRating={(rating) => setRating(rating)}
        userReview={(review) => setReview(review)}
        onSubmitReview={() => submitUserFeedback()}
      />
    </>
  );
};

export default CourseDetailPresenter;
