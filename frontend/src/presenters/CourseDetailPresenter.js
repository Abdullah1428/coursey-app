import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetailView from '../views/CourseDetailView';
import Loader from '../components/Loader';

const CourseDetailPresenter = ({ courseModel, feedbackModel, match }) => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apiUrl = `/api/course/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      courseModel.setCourseDetails(data);

      setCourseDetail(courseModel.getCourseDetails());
    };
    setFeedback(feedbackModel.getFeedback())
    getCourseDataFromAPI();
  }, [courseModel, feedbackModel, match]);

  return (
    <>
      {!courseDetail ? (
        <Loader />
      ) : (
        <CourseDetailView courseDetail={courseDetail} feedback={feedback}/>
      )}
    </>
  );
};

export default CourseDetailPresenter;
