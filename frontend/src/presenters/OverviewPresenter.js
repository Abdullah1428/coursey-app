import React, { useEffect, useState } from 'react';
import { RecentActivity, PopularCourses } from '../views/OverviewView';
import { useAuth } from '../context/AuthContext.js';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OverviewPresenter = (props) => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingP, setLoadingP] = useState(false);
  const [errorP, setErrorP] = useState('');

  const { currentUser } = useAuth();

  useEffect(() => {
    const getUserActivity = async () => {
      setLoading(true);
      try {
        let apiUrl = '/user/activity/';
        const body = {
          uid: currentUser.uid,
        };

        const { data } = await axios.post(apiUrl, body);

        let sorted = data.sort(function compareNumOfReviews(a, b) {
          let ai = new Date(a.createdAt.seconds);
          let bi = new Date(b.createdAt.seconds);

          return ai > bi ? -1 : ai < bi ? 1 : 0;
        });

        setRecentActivity(sorted.slice(0, 3));
        setLoading(false);
      } catch (error) {
        setError('Activities failed to load, try again.');
        setLoading(false);
      }
    };

    const getPopularCourses = async () => {
      setLoadingP(true);
      try {
        let apiUrl = '/user/feedbacks/popular';

        const { data } = await axios.get(apiUrl);

        setPopularCourses(data);
        setLoadingP(false);
      } catch (error) {
        setErrorP('Popular courses failed to load, try again.');
        setLoadingP(false);
      }
    };

    getUserActivity();
    getPopularCourses();
  }, [currentUser.uid]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message hide={() => setError('')}>{error}</Message>
      ) : (
        recentActivity && <RecentActivity recentActivity={recentActivity} />
      )}

      {loadingP ? (
        <Loader />
      ) : errorP && errorP.length > 0 ? (
        <Message hide={() => setErrorP('')}>{errorP}</Message>
      ) : (
        popularCourses && (
          <PopularCourses
            popularCourses={popularCourses}
            limit={3}
            path={'/'}
          />
        )
      )}
    </>
  );
};

export default OverviewPresenter;
