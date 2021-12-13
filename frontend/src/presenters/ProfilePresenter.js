import React, { useEffect, useState } from 'react';
import ProfileView from '../views/ProfileView';
import Loader from '../components/Loader';
import axios from 'axios';
import Message from '../components/Message';
import { useAuth } from '../context/AuthContext';

const ProfilePresenter = (props) => {
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useAuth();

  const handleUpdate = async (e) => {
    let apiUrl = '/user/updateProfile';
    const body = {
      uid: currentUser.userUid,
      name: name,
      program: program,
      school: school,
      year: year,
    };
    const status = await axios.post(apiUrl, body);
    if (status === 200) {
      getProfileDataFromAPI();
    } else if (status === 400) {
      console.log(status);
    }
  };

  const getProfileDataFromAPI = async () => {
    setLoading(true);
    setError('');
    try {
      let apiUrl = '/user/getProfile';
      const body = { uid: currentUser.userUid };
      const { data } = await axios.post(apiUrl, body);
      setName(data.name);
      setProgram(data.program);
      setSchool(data.school);
      setYear(data.year);
      setEmail(data.email);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileDataFromAPI();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <ProfileView
          name={name}
          program={program}
          school={school}
          year={year}
          email={email}
          setName={(e) => setName(e)}
          setProgram={(e) => setProgram(e)}
          setSchool={(e) => setSchool(e)}
          setYear={(e) => setYear(e)}
          handleUpdate={(e) => handleUpdate(e)}
        />
      )}
    </>
  );
};

export default ProfilePresenter;
