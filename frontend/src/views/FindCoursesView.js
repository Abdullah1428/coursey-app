import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

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
  // let kthImages = ['kth.jpeg', 'kth-2.jpeg', 'kth-3.jpeg', 'kth-4.jpeg'];
  return (
    <Row>
      <div className='py-2' />
      <hr />
      <h4 className='py-4'>Search Results</h4>
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
              }}
            >
              <Card
                style={{
                  margin: '10px',
                  width: '18rem',
                  boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)',
                }}
              >
                {/* <Card.Img
                  variant='top'
                  style={{ height: 200 }}
                  src={`assets/${
                    kthImages[Math.floor(Math.random() * (3 - 0) + 0)]
                  }`}
                /> */}
                <Card.Body>
                  <Card.Title>{search.course.courseCode}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    subtitle
                  </Card.Subtitle>

                  <Card.Text className='cardText'>
                    {search.course.title}
                  </Card.Text>

                  <div style={{ margin: 10 }} />
                  <Card.Text as='div'>
                    <Rating value={4} text={` num of reviews`} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  );
};
