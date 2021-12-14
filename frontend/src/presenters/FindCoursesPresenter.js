import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBar, SearchResults } from '../views/FindCoursesView';
import Loader from '../components/Loader';
import axios from 'axios';
import Message from '../components/Message';

const FindCoursesPresenter = () => {
  // location to receive search Results and Query
  const location = useLocation();

  const { query } = location.state ? location.state : '';
  const { results } = location.state ? location.state : [];

  const [searchQuery, setSearchQuery] = useState(query ? query : '');
  const [searchResults, setSearchResults] = useState(results ? results : []);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const searchCourse = async (e) => {
    setLoader(true);

    e.preventDefault();

    if (searchQuery.length < 4) {
      alert('Please search for appropraite course!');
      setLoader(false);
      return;
    }

    try {
      let apiUrl = `/api/courses/${searchQuery}`;

      const { data } = await axios.get(apiUrl);

      console.log(data);

      setSearchResults(data.searchHits);

      setLoader(false);
      setError('');
    } catch (error) {
      setError(error.message);
      setLoader(false);
    }
  };

  return (
    <>
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
