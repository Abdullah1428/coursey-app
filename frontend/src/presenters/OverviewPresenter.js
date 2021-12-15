import React, { useEffect, useState } from 'react';
import Overview from '../views/OverviewView';
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
          limit: 3,
        };

        const { data } = await axios.post(apiUrl, body);

        setRecentActivity(data);
        setLoading(false);
      } catch (error) {
        setError('Error from API');
        setLoading(false);
      }
    };

    const getPopularCourses = async () => {
      setLoadingP(true);
      try {
        let apiUrl = '/user/feedbacks/all';

        const { data } = await axios.get(apiUrl);

        // course: "DH2643"
        // createdAt: {seconds: 1639416978, nanoseconds: 267000000}
        // id: "75UYNpYG0m0jAQHWWuws"
        // rating: 4
        // review: "This is a really good course."
        // title: "Very Gooood"
        // uid: "jgiee62MHFU6C9TSHGltdMZeo093"

        setPopularCourses(data);
        setLoadingP(false);
      } catch (error) {
        setErrorP('Error from API');
        setLoadingP(false);
      }
    };

    getUserActivity();
    //getPopularCourses();
  }, [currentUser.uid]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message>{error}</Message>
      ) : (
        recentActivity && <Overview recentActivity={recentActivity} />
      )}
    </>
  );
};

export default OverviewPresenter;
