import React, { useState } from 'react';
import { SearchBar, SearchResults } from '../views/FindCoursesView';
import Loader from '../components/Loader';
import axios from 'axios';
import Message from '../components/Message';

const FindCoursesPresenter = () => {
  //const [promise, setPromise] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
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
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={(e) => searchCourse(e)}
      />
      {loader ? (
        <Loader />
      ) : error && error.length > 0 ? (
        <Message>{error}</Message>
      ) : (
        searchResults && <SearchResults searchResults={searchResults} />
      )}
    </>
  );
};

export default FindCoursesPresenter;
