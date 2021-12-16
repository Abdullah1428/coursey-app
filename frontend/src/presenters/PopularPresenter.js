import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PopularCourses } from '../views/OverviewView';

const PopularPresenter = (props) => {
  const location = useLocation();

  const { popularCourses } = location.state ? location.state : [];

  const { limit } = location.state ? location.state : 0;

  return (
    <>
      <Link
        className='btn btn-dark my-3'
        to={{
          pathname: '/',
        }}>
        Go Back
      </Link>
      <PopularCourses popularCourses={popularCourses} limit={limit} />
    </>
  );
};

export default PopularPresenter;
