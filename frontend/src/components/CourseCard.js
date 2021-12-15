import { cardStyle } from '../styles/cardStyle';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import FeedbackModal from './FeedbackModal';

const CourseCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card
      className='my-3 p-3 rounded'
      bg={cardStyle.bg}
      text={cardStyle.text}
      style={cardStyle}>
      <Card.Body>
        <Card.Title className='cardTitle'>{props.course.title}</Card.Title>
        <Card.Text className='mb-2 text-success'>
          {props.course.course}
          {props.course.courseCode}
        </Card.Text>

        <Card.Text className='cardText text-warning'>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        {!props.isFeedbackCard && (
          <Card.Text className='cardText text-muted'>
            LEVEL: {props.course.educationalLevel}
          </Card.Text>
        )}

        {props.isFeedbackCard && (
          <Card.Text as='div' className='cardText'>
            <Rating value={props.course.rating} text={` rating`} />
          </Card.Text>
        )}
      </Card.Body>
      {props.isFeedbackCard && (
        <Button variant='success' size='sm' onClick={() => setModalShow(true)}>
          See Review
        </Button>
      )}
      {props.isFeedbackCard && (
        <FeedbackModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          course={props.course}
        />
      )}
    </Card>
  );
};

export default CourseCard;
