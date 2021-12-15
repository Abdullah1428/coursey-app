import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import { cardStyle } from '../styles/cardStyle';

const Overview = (props) => {
  return (
    <div>
      <Row>
        <h2>Your Recent Activity</h2>
      </Row>

      <Row>
        {props.courses && props.courses.length > 0 ? (
          props.courses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <Link
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: `/course/${course.course}`,
                }}>
                <CourseCard
                  bg={cardStyle.bg}
                  text={cardStyle.text}
                  style={cardStyle}
                  course={course}
                />
              </Link>
            </Col>
          ))
        ) : (
          <h2>No Recent Activity Yet</h2>
        )}
        <Col
          style={{ justifyContent: 'flex-end' }}
          className='d-flex align-items-center'>
          {props.courses && props.courses.length > 0 && (
            <Link to={`/mycoursey`}>
              <Button>See More</Button>
            </Link>
          )}
        </Col>
      </Row>

      <Row>
        <h2>Popular Courses</h2>
      </Row>
    </div>
  );
};

export default Overview;
