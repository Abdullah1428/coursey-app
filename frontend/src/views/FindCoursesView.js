import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cardStyle } from '../styles/cardStyle';
import CourseCard from '../components/CourseCard';

export const SearchBar = (props) => {
  return (
    <>
      <h2>Find Cool KTH Courses...</h2>
      <Row className='py-2'>
        <Col>
          <Form>
            <Form.Control
              type='text'
              name='q'
              value={props.searchQuery}
              onChange={(e) => props.onChange(e)}
              placeholder='Search Courses by Name and Code...'
              className='mr-sm-2 ml-sm-5'></Form.Control>
          </Form>
        </Col>
        <Col>
          <Button
            style={{ marginLeft: 10 }}
            type='submit'
            variant='success'
            className='p-2'
            onClick={(e) => props.onSearch(e)}>
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
};

export const SearchResults = (props) => {
  // let kthImages = ['kth.jpeg', 'kth-2.jpeg', 'kth-3.jpeg', 'kth-4.jpeg'];
  return (
    <Row>
      <div className='py-2' />
      <hr />
      <h2>Search Results</h2>
      {props.searchResults &&
        props.searchResults.map((search) => (
          <Col key={search.course.courseCode} sm={12} md={6} lg={4} xl={3}>
            <Link
              style={{ textDecoration: 'none' }}
              to={{
                pathname: `/course/${search.course.courseCode}`,
                state: {
                  searchQuery: props.searchQuery,
                  searchResults: props.searchResults,
                },
              }}>
              <CourseCard
                bg={cardStyle.bg}
                text={cardStyle.text}
                style={cardStyle}
                course={search.course}
                isFeedbackCard={false}
              />
            </Link>
          </Col>
        ))}
    </Row>
  );
};
