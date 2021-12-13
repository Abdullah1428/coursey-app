import React, { useContext, useState } from 'react';

import axios from 'axios';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = async (email, password) => {
    try {
      let apiUrl = '/auth/register';

      let user = {
        email,
        password,
      };

      const { data } = await axios.post(apiUrl, user);

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
