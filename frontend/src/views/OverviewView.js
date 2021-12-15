import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import FeedbackCard from '../components/FeedbackCard';
import { Link } from 'react-router-dom';
import { courseCardStyle } from '../styles/courseCardStyle';
import PopularCard from '../components/PopularCard';
import { feedbackCardStyle } from '../styles/feedbackCardStyle';
export const RecentActivity = (props) => {
  return (
    <div>
      <Row>
        <h2>Your Recent Activity</h2>
      </Row>

      <Row>
        {props.recentActivity && props.recentActivity.length > 0 ? (
          props.recentActivity.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <Link
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: `/course/${course.course}`,
                }}>
                <FeedbackCard
                  bg={courseCardStyle.bg}
                  text={courseCardStyle.text}
                  style={courseCardStyle}
                  course={course}
                  isFeedbackCard={true}
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
          {props.recentActivity && props.recentActivity.length > 0 && (
            <Link to={`/mycoursey`}>
              <Button variant='success'>See More</Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export const PopularCourses = (props) => {
  return (
    <div>
      <Row>
        <h2>Popular Courses</h2>
      </Row>

      <Row>
        {props.popularCourses && props.popularCourses.length > 0 ? (
          props.popularCourses.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <Link
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: `/course/${course.course}`,
                }}>
                <PopularCard
                  bg={feedbackCardStyle.bg}
                  text={feedbackCardStyle.text}
                  style={feedbackCardStyle}
                  course={course}
                  isFeedbackCard={true}
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
          {props.popularCourses && props.popularCourses.length > 0 && (
            <Link to={`/courses`}>
              <Button variant='success'>See More</Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};
