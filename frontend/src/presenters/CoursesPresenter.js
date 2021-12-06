import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CoursesView from '../views/CoursesView';
import Loader from '../components/Loader';

const CoursesPresenter = () => {
  const [courseList, setCourseList] = useState(null);

  useEffect(() => {
    const getAllCoursesFromAPI = async () => {
      let apiUrl = '/api/courses';

      const { data } = await axios.get(apiUrl);
      setCourseList(data);
    };

    getAllCoursesFromAPI();
  }, []);

  return <>{!courseList ? <Loader /> : <CoursesView courses={courseList} />}</>;
};

export default CoursesPresenter;
