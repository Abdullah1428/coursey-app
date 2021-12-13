import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';

const Overview = (props) => {
  return (
    <div>
      <Row>
        <h2>Your Recent Activity:</h2>
      </Row>

      <Row>
        {props.courses && props.courses.length > 0 ? (
          props.courses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <CourseCard course={course} />
            </Col>
          ))
        ) : (
          <h4>No Recent Activity Yet</h4>
        )}
        <Col
          style={{ justifyContent: 'flex-end' }}
          className="d-flex align-items-center">
          {props.courses && props.courses.length > 0 && (
            <Link to={`/mycoursey`}>
              <Button>See More</Button>
            </Link>
          )}
        </Col>
      </Row>

      <Row>
        <h2>Popular Courses:</h2>
      </Row>
    </div>
  );
};

export default Overview;
