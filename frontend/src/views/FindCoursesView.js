import React from 'react';
import { Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';

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
              onChange={(e) => props.onChange(e)}
              placeholder='Search Courses by Name and Code...'
              className='mr-sm-2 ml-sm-5'
            ></Form.Control>
          </Form>
        </Col>
        <Col>
          <Button
            style={{ marginLeft: 10 }}
            type='submit'
            variant='success'
            className='p-2'
            onClick={(e) => props.onSearch(e)}
          >
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
};

export const SearchResults = (props) => {
  return (
    <Row>
      <div className='py-2' />
      <hr />
      <h4 className='py-4'>Search Results</h4>
      {props.searchResults &&
        props.searchResults.map((search) => (
          <Col key={search.course.courseCode} sm={12} md={6} lg={4} xl={3}>
            <CourseCard course={search.course} />
            {/* <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Course Code</Col>
                    <Col>
                      <strong>{search.course.courseCode}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Course Title</Col>
                    <Col>{search.course.title}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    onClick={() => console.log('hello')}
                    className='btn-block'
                    type='button'
                    block
                  >
                    Course Details
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card> */}
          </Col>
        ))}
    </Row>
  );
};
