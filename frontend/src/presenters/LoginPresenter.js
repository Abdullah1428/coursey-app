import React, { useEffect, useState } from 'react';
import LoginView from '../views/LoginView';
import axios from 'axios';

const LoginPresenter = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log('handleSubmit ' + email + ' ' + password);

    const loginUser = async () => {
      let apiUrl = '/login';

      console.log('started post call');

      let user = {
        email,
        password,
      };
      const res = await axios
        .post(apiUrl, user)
        .then(() => {
          console.log('post request successful');
          res.redirect('/courses');
        })
        .catch((err) => console.log(err));
      console.log(res);
    };

    loginUser();
  };

  // make a call to /login
  useEffect(() => {
    setEmail(email);
    setPassword(password);
  }, [email, password]);

  return (
    <LoginView
      email={email}
      password={password}
      setEmail={(email) => setEmail(email)}
      setPassword={(password) => setPassword(password)}
      handleSubmit={() => handleSubmit()}
    />
  );
};

export default LoginPresenter;
