import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../context/AuthContext.js';
import ActivitiesView from '../views/ActivitiesView.js';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ActivitiesPresenter = (props) => {
  const [courses, setCourses] = useState([]);
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
          limit: 0,
        };

        const { data } = await axios.post(apiUrl, body);

        setCourses(data);
        setLoading(false);
      } catch (error) {
        setError('Error from API');
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
        <Message>{error}</Message>
      ) : (
        courses && <ActivitiesView courses={courses} />
      )}
    </>
  );
};

export default ActivitiesPresenter;
