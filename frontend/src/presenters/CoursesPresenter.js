import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Courses from '../views/Courses';
import Loader from '../components/Loader';

const CoursesPresenter = () => {
  const [courseList, setCourseList] = useState(null);

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apUrl = '/api/courses';

      const { data } = await axios.get(apUrl);
      console.log(data);
      setCourseList(data);
    };

    getCourseDataFromAPI();
  }, []);

  return <>{!courseList ? <Loader /> : <Courses courses={courseList} />}</>;
};

export default CoursesPresenter;
