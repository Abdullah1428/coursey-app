import React, { useState } from 'react';
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

  const { loginUser } = useAuth();
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
