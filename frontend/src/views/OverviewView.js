import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import FeedbackCard from '../components/FeedbackCard';
import { Link } from 'react-router-dom';
import { feedbackCardStyle, courseCardStyle } from '../styles/Styles';
import PopularCard from '../components/PopularCard';

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
              <FeedbackCard
                bg={courseCardStyle.bg}
                text={courseCardStyle.text}
                style={courseCardStyle}
                course={course}
                path={'home'}
              />
            </Col>
          ))
        ) : (
          <h2>No Recent Activity Yet</h2>
        )}
        <Col
          style={{ justifyContent: 'flex-end' }}
          className="d-flex align-items-center">
          {props.recentActivity && props.recentActivity.length > 0 && (
            <Link to={`/mycoursey`}>
              <Button variant="success">See More</Button>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
};

export const PopularCourses = (props) => {
  const doSortingandFiltering = (c) => {
    let sorted = c.sort(function compareNumOfReviews(a, b) {
      let ai = Number(a.totalFeedbacks);
      let bi = Number(b.totalFeedbacks);

      return ai > bi ? -1 : ai < bi ? 1 : 0;
    });

    const arrUnique = sorted.filter(
      (v, i, a) => a.findIndex((t) => t.course === v.course) === i
    );

    return props.limit === 3 ? arrUnique.slice(0, 3) : arrUnique.slice(0, 20);
  };

  return (
    <div>
      <Row>
        <h2>Popular Courses</h2>
      </Row>

      <Row>
        {props.popularCourses && props.popularCourses.length > 0 ? (
          doSortingandFiltering([...props.popularCourses]).map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <Link
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: `/course/${course.course}`,
                  state: {
                    path: 'home',
                  },
                }}>
                <PopularCard
                  bg={feedbackCardStyle.bg}
                  text={feedbackCardStyle.text}
                  style={feedbackCardStyle}
                  course={course}
                />
              </Link>
            </Col>
          ))
        ) : (
          <h2>Not enough reviews yet to show popular courses...</h2>
        )}
        <Col
          style={{ justifyContent: 'flex-end' }}
          className="d-flex align-items-center">
          {props.popularCourses &&
            props.popularCourses.length > 0 &&
            props.limit !== 0 && (
              <Link
                to={{
                  pathname: '/popular',
                  state: {
                    popularCourses: props.popularCourses,
                    limit: 0,
                  },
                }}>
                <Button variant="success">See More</Button>
              </Link>
            )}
        </Col>
      </Row>
    </div>
  );
};
