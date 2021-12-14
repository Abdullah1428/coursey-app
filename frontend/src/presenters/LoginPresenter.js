import React, { useState, useEffect } from 'react';
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

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    const status = await loginUser(email, password);

    if (status === 200) {
      setLoading(false);
      history.push('/');
    } else if (status === 400) {
      setLoading(false);
      setError('Error in Login');
    }
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
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
