import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetail from '../views/CourseDetail';
import Loader from '../components/Loader';

const CourseDetailPresenter = (props) => {
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apiUrl = '/api/course/DH2642';

      const { data } = await axios.get(apiUrl);

      console.log(data);

      props.courseModel.setCourseDetails(data);

      setCourseDetail(props.courseModel.getCourseDetails());
    };

    getCourseDataFromAPI();
  }, []);

  return (
    <>
      {!courseDetail ? (
        <Loader />
      ) : (
        <CourseDetail courseDetail={courseDetail} />
      )}
    </>
  );
};

export default CourseDetailPresenter;
