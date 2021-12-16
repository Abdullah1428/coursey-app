import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RegisterView from '../views/RegisterView';
import { useAuth } from '../context/AuthContext';

import Loader from '../components/Loader';
import Message from '../components/Message';
import AlertModal from '../components/AlertModal';

const RegisterPresenter = (_props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { registerUser, currentUser } = useAuth();
  const history = useHistory();

  // alert modal state
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const parts = email.split('@');

    if (parts[1] !== 'kth.se' && parts[1] !== 'ug.kth.se') {
      setMessage('Please use your KTH email.');
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      setShowAlert(true);
      return;
    }

    setLoading(true);
    setError('');
    const status = await registerUser(email, password);

    if (status === 200) {
      setLoading(false);
      history.push('/');
    } else if (status === 400) {
      setLoading(false);
      setError('Error in registration, try again.');
    }
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  return (
    <>
      <AlertModal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        title={'Register'}
        message={message}
      />
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <RegisterView
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setEmail={(email) => setEmail(email)}
        setPassword={(password) => setPassword(password)}
        setConfirmPassword={(confirmPassword) =>
          setConfirmPassword(confirmPassword)
        }
        handleSubmit={() => handleSubmit()}
      />
    </>
  );
};

export default RegisterPresenter;
