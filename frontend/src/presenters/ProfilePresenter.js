import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import ProfileView from '../views/ProfileView';
import Loader from '../components/Loader';
import Message from '../components/Message';
import AlertModal from '../components/AlertModal';

import { useAuth } from '../context/AuthContext';

const ProfilePresenter = (props) => {
  // hold the user data fetched from api
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [program, setProgram] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // storing profile data as whole object to see if user has changed data for update or not
  const [profData, setProfData] = useState({});

  // alert modal state
  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState('danger');
  const [message, setMessage] = useState('');

  const { currentUser } = useAuth();

  const handleUpdate = async (e) => {
    if (profData) {
      if (
        name === profData.name &&
        program === profData.program &&
        school === profData.school &&
        year === profData.year
      ) {
        setVariant('danger');
        setMessage('Please update something!');
        setShowAlert(true);
        return;
      }
    }

    let apiUrl = '/user/updateprofile';
    const body = {
      uid: currentUser.uid,
      name: name,
      username: username,
      program: program,
      school: school,
      year: year,
    };
    const { status } = await axios.post(apiUrl, body);

    if (status === 200) {
      getProfileDataFromAPI();
      setVariant('success');
      setMessage('Profile updated successfully!');
      setShowAlert(true);
    } else if (status === 400) {
      setVariant('danger');
      setMessage('Profile could not be updated, try again.');
      setShowAlert(true);
    }
  };

  const getProfileDataFromAPI = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      let apiUrl = '/user/getprofile';
      const body = { uid: currentUser.uid };
      const { data } = await axios.post(apiUrl, body);
      setProfData(data);
      setName(data.name);
      setUsername(data.username);
      setProgram(data.program);
      setSchool(data.school);
      setYear(data.year);
      setEmail(data.email);
      setLoading(false);
    } catch (error) {
      setError('Profile failed to load, refresh.');
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    getProfileDataFromAPI();
  }, [getProfileDataFromAPI]);

  return (
    <>
      <AlertModal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        title={'Profile'}
        message={message}
        variant={variant}
      />
      {loading ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message hide={() => setError('')}>{error}</Message>
      ) : (
        <ProfileView
          name={name}
          username={username}
          program={program}
          school={school}
          year={year}
          email={email}
          setName={(e) => setName(e)}
          setUsername={(e) => setUsername(e)}
          setProgram={(e) => setProgram(e)}
          setSchool={(e) => setSchool(e)}
          setYear={(e) => setYear(e)}
          handleUpdate={(e) => handleUpdate(e)}
        />
      )}
    </>
  );
};

export default ProfilePresenter;
