import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchBox = () => {
  const [search, setSearch] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (search.length < 4) {
      alert('Please search for appropraite course!');
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Form inline>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setSearch(e.target.value)}
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
            onClick={submitHandler}
          >
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SearchBox;
