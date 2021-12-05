import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetail from '../views/CourseDetail';
import Loader from '../components/Loader';

const CourseDetailPresenter = (props) => {
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      const PORT = process.env.PORT || 80;
      let apUrl = `'http://0.0.0.0/api/course/DH2642'`;

      console.log('Port in use at the backend: ' + PORT);

      const { data } = await axios.get(apUrl);

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
