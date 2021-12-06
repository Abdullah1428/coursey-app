import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetailView from '../views/CourseDetailView';
import Loader from '../components/Loader';

const CourseDetailPresenter = ({ courseModel, match }) => {
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apiUrl = `/api/course/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      console.log(data);

      courseModel.setCourseDetails(data);

      setCourseDetail(courseModel.getCourseDetails());
    };

    getCourseDataFromAPI();
  }, [courseModel, match]);

  return (
    <>
      {!courseDetail ? (
        <Loader />
      ) : (
        <CourseDetailView courseDetail={courseDetail} />
      )}
    </>
  );
};

export default CourseDetailPresenter;
