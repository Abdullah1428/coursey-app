import React from 'react';
import ProfilePresenter from './ProfilePresenter';
import ActivitiesPresenter from './ActivitiesPresenter';

const MyCourseyPresenter = (props) => {
  return (
    <>
      <ProfilePresenter props={props} />
      <ActivitiesPresenter props={props} />
    </>
  );
};

export default MyCourseyPresenter;
