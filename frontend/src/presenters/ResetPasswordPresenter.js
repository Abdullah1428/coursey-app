import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ResetPasswordView from '../views/ResetPasswordView';

import Loader from '../components/Loader';
import Message from '../components/Message';
import axios from 'axios';

const ResetPasswordPresenter = (_props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    const parts = email.split('@');

    if (parts[1] !== 'kth.se' && parts[1] !== 'ug.kth.se') {
      alert('Please use your kth mail.');
      return;
    }

    setLoading(true);
    setError('');
    let apiUrl = '/auth/resetpassword';
    const body = {
      email: email,
    };
    try {
      const { status } = await axios.post(apiUrl, body);

      if (status === 200) {
        alert('Password reset email sent if it excist!');
        history.push('/login');
      }
    } catch (error) {
      setLoading(false);
      setError('Error in resetting password');
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}

      <ResetPasswordView
        email={email}
        handleSubmit={() => handleSubmit()}
        setEmail={(text) => setEmail(text)}
      />
    </>
  );
};

export default ResetPasswordPresenter;
