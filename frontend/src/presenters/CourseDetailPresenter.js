import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetail from '../views/CourseDetail';
import Loader from '../components/Loader';

const CourseDetailPresenter = (props) => {
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apUrl = `'http://localhost:${
        process.env.PORT ? process.env.PORT : 5000
      }/api/course/DH2642'`;

      const { data } = await axios.get(apUrl);

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
