import React, { useEffect, useState } from 'react';
import Overview from '../views/OverviewView';
import { useAuth } from '../context/AuthContext.js';
import axios from 'axios';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OverviewPresenter = (props) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useAuth();

  useEffect(() => {
    const getUserActivity = async () => {
      setLoading(true);
      try {
        let apiUrl = `/user/activity/${currentUser.uid}`;

        const { data } = await axios.get(apiUrl);

        setCourses(data);
        setLoading(false);
      } catch (error) {
        setError('Error from API');
        setLoading(false);
      }
    };

    getUserActivity();
  }, [currentUser.uid]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message>{error}</Message>
      ) : (
        courses && <Overview courses={courses} />
      )}
    </>
  );
};

export default OverviewPresenter;
