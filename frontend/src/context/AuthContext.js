import React, { useContext, useState } from 'react';

import axios from 'axios';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const user = localStorage.getItem('currentUser');

  const [currentUser, setCurrentUser] = useState(
    user ? JSON.parse(user) : null
  );

  const registerUser = async (email, password) => {
    try {
      let apiUrl = '/auth/register';

      let user = {
        email,
        password,
      };

      const { data } = await axios.post(apiUrl, user);

      // set username from first part of email to send back
      let unameParts = email.split('@');
      let uname = unameParts[0];
      data.username = uname;
      localStorage.setItem('currentUser', JSON.stringify(data));

      setCurrentUser(data);

      return 200;
    } catch (error) {
      console.log(error.message);
      setCurrentUser(null);
      return 400;
    }
  };

  const loginUser = async (email, password) => {
    try {
      let apiUrl = '/auth/login';

      let user = {
        email,
        password,
      };
      const { data } = await axios.post(apiUrl, user);

      // set username from first part of email to send back
      let unameParts = email.split('@');
      let uname = unameParts[0];
      data.username = uname;
      localStorage.setItem('currentUser', JSON.stringify(data));

      setCurrentUser(data);

      return 200;
    } catch (error) {
      console.log(error.message);
      setCurrentUser(null);

      return 400;
    }
  };

  const logoutUser = async () => {
    try {
      let apiUrl = '/auth/logout';

      await axios.get(apiUrl);

      localStorage.removeItem('currentUser');

      setCurrentUser(null);

      return 200;
    } catch (error) {
      console.log(error.message);
      setCurrentUser(null);
      return 400;
    }
  };

  const contextValues = {
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
