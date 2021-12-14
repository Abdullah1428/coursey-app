import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RegisterView from '../views/RegisterView';
import { useAuth } from '../context/AuthContext';

import Loader from '../components/Loader';
import Message from '../components/Message';

const RegisterPresenter = (_props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { registerUser, currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      setLoading(true);
      setError('');
      const status = await registerUser(email, password);

      if (status === 200) {
        setLoading(false);
        history.push('/');
      } else if (status === 400) {
        setLoading(false);
        setError('Error in Registration');
      }
    } else {
      setError('Passwords do not match');
    }
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser]);

  return (
    <>
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
