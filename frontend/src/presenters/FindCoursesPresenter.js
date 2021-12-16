import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { SearchBar, SearchResults } from '../views/FindCoursesView';
import Loader from '../components/Loader';
import Message from '../components/Message';
import AlertModal from '../components/AlertModal';

const FindCoursesPresenter = () => {
  // location to receive search Results and Query
  const location = useLocation();

  const { query } = location.state ? location.state : '';
  const { results } = location.state ? location.state : [];

  const [searchQuery, setSearchQuery] = useState(query ? query : '');
  const [searchResults, setSearchResults] = useState(results ? results : []);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  const searchCourse = async (e) => {
    setLoader(true);

    e.preventDefault();

    if (searchQuery.length < 4) {
      setShowAlert(true);
      setLoader(false);
      return;
    }

    try {
      let apiUrl = `/api/courses/${searchQuery}`;

      const { data } = await axios.get(apiUrl);

      setSearchResults(data.searchHits);

      setLoader(false);
      setError('');
    } catch (error) {
      setError('No results returned, try again.');
      setLoader(false);
    }
  };

  // disabling enter key on search
  useEffect(() => {
    function logKey(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        return false;
      }
    }

    const listener = window.addEventListener('keydown', logKey);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <AlertModal
        show={showAlert}
        onHide={() => setShowAlert(false)}
        title={'Search'}
        message={'Length of search is too short, try adding more detail.'}
      />
      <SearchBar
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={(e) => searchCourse(e)}
      />
      {loader ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message>{error}</Message>
      ) : (
        searchResults && (
          <SearchResults
            searchQuery={searchQuery}
            searchResults={searchResults}
          />
        )
      )}
    </>
  );
};

export default FindCoursesPresenter;
