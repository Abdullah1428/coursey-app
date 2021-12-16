import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FeedbackCard from '../components/FeedbackCard';
import { feedbackCardStyle } from '../styles/Styles';

const ActivitiesView = (props) => {
  return (
    <div>
      <Row>
        <h2 className='headingColor'>Your Coursey Activity</h2>
      </Row>

      <Row>
        {props.feedbacks && props.feedbacks.length > 0 ? (
          props.feedbacks.map((course) => (
            <Col key={course.id} sm={12} md={6} lg={4} xl={3}>
              <FeedbackCard
                bg={feedbackCardStyle.bg}
                text={feedbackCardStyle.text}
                style={feedbackCardStyle}
                course={course}
              />
            </Col>
          ))
        ) : (
          <h2>No Activity Yet</h2>
        )}
      </Row>
    </div>
  );
};

export default ActivitiesView;
