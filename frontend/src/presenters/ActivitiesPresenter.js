import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../context/AuthContext.js';
import ActivitiesView from '../views/ActivitiesView.js';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ActivitiesPresenter = (props) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }

    const getAllActivities = async () => {
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

        setFeedbacks(sorted);
        setLoading(false);
      } catch (error) {
        setError('Activities failed to load, try again.');
        setLoading(false);
      }
    };
    getAllActivities();
  }, [currentUser, history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message hide={() => setError('')}>{error}</Message>
      ) : (
        feedbacks && <ActivitiesView feedbacks={feedbacks} />
      )}
    </>
  );
};

export default ActivitiesPresenter;
