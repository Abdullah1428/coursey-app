import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ResetPasswordView from '../views/ResetPasswordView';

import Loader from '../components/Loader';
import Message from '../components/Message';
import axios from 'axios';
import AlertModal from '../components/AlertModal';

const ResetPasswordPresenter = (_props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    const parts = email.split('@');

    if (parts[1] !== 'kth.se' && parts[1] !== 'ug.kth.se') {
      setMessage('Please use your KTH email.');
      setShowAlert(true);
      return;
    }

    setLoading(true);
    let apiUrl = '/auth/resetpassword';
    const body = {
      email: email,
    };
    try {
      const response = await axios.post(apiUrl, body);

      setLoading(false);

      if (response.data.error.code === 'auth/user-not-found') {
        setError('User not found, try again with correct email.');
        setLoading(false);
        return;
      }

      setMessage('Password reset email sent successfully!');
      setShowAlert(true);
      history.push('/login');
    } catch (error) {
      setLoading(false);
      setError('Password reset failed, try again.');
    }
  };

  return (
    <>
      <AlertModal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        title={'Reset Password'}
        message={message}
      />

      {loading && <Loader />}
      {error && error.length > 0 && (
        <Message hide={() => setError('')}>{error}</Message>
      )}

      <ResetPasswordView
        email={email}
        handleSubmit={() => handleSubmit()}
        setEmail={(text) => setEmail(text)}
      />
    </>
  );
};

export default ResetPasswordPresenter;
