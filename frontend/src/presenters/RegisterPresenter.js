import React, { useEffect, useState } from 'react';
import RegisterView from '../views/RegisterView';
import axios from 'axios';

const RegisterPresenter = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
      const registerUser = async () => {
        let apiUrl = '/register';

        let user = {
          email,
          password,
        };

        const { data } = await axios
          .post(apiUrl, user)
          .then(() => console.log('post request successful'))
          .catch((err) => console.log(err));
      };

      registerUser();
    } else {
      console.log("Error: passwords don't match");
    }
  };

  useEffect(() => {
    setEmail(email);
    setPassword(password);
    setConfirmPassword(confirmPassword);
  }, [email, password, confirmPassword]);

  return (
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
  );
};

export default RegisterPresenter;
