import React from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';
import { cardStyle } from '../styles/cardStyle';

const ActivitiesView = (props) => {
  return (
    <div>
      <Row>
        <h2>Your Recent Activities:</h2>
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
          <h4>No Recent Activity Yet</h4>
        )}
      </Row>
    </div>
  );
};

export default ActivitiesView;
