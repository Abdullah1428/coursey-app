import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseDetailView from '../views/CourseDetailView';
import Loader from '../components/Loader';

const CourseDetailPresenter = ({ match }) => {
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apiUrl = `/api/course/${match.params.id}`;

      const { data } = await axios.get(apiUrl);

      setCourseDetail(data);
    };

    getCourseDataFromAPI();
  }, [match]);

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
