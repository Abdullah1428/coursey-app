import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import LoginView from '../views/LoginView';
import { useAuth } from '../context/AuthContext';

import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginPresenter = (_props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { loginUser, currentUser } = useAuth();
  const history = useHistory();

  // Fix for this Warning: Can't perform a React state update on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application. To fix, cancel
  // all subscriptions and asynchronous tasks in a useEffect cleanup function.
  let componentLoaded = useRef(true); //

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    const status = await loginUser(email, password);

    if (status === 200) {
      setLoading(false);
      history.push('/');
    } else if (status === 400) {
      setLoading(false);
      setError('Error in login, try again.');
    }
  };

  useEffect(() => {
    if (componentLoaded.current) {
      if (currentUser) {
        history.push('/');
      }
    }

    return () => {
      componentLoaded.current = false;
    };
  }, [currentUser, history]);

  return (
    <>
      {loading && <Loader />}
      {error && error.length > 0 && (
        <Message hide={() => setError('')}>{error}</Message>
      )}
      <LoginView
        email={email}
        password={password}
        setEmail={(email) => setEmail(email)}
        setPassword={(password) => setPassword(password)}
        handleSubmit={() => handleSubmit()}
      />
    </>
  );
};

export default LoginPresenter;
