import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import { PopularCourses } from '../views/OverviewView';
import Loader from '../components/Loader';
import Message from '../components/Message';

const PopularPresenter = (props) => {
  const [pCourses, setPCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  const { popularCourses } = location.state ? location.state : [];

  const { limit } = location.state ? location.state : 0;

  const getPopularCourses = useCallback(async () => {
    setLoading(true);
    try {
      let apiUrl = '/user/feedbacks/popular';

      const { data } = await axios.get(apiUrl);

      setPCourses(data);
      setLoading(false);
    } catch (error) {
      setError('Popular courses failed to load, try again.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!popularCourses) {
      getPopularCourses();
    } else {
      setLoading(true);
      setPCourses(popularCourses);
      setLoading(false);
    }
  }, [getPopularCourses, popularCourses]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message hide={() => setError('')}>{error}</Message>
      ) : (
        <>
          {/* <Link
            className='btn btn-dark my-3'
            to={{
              pathname: '/',
            }}>
            Go Back
          </Link> */}
          <PopularCourses
            popularCourses={pCourses}
            limit={limit ? limit : 0}
            path={'/popular'}
          />
        </>
      )}
    </>
  );
};

export default PopularPresenter;
