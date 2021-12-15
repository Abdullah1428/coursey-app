import { cardStyle } from '../styles/cardStyle';
import { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
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
        <Card.Subtitle className='mb-2 text-muted'>
          {props.course.course}
          {props.course.courseCode}
        </Card.Subtitle>

        <Card.Text className='cardText'>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        <Card.Text className='cardText'>
          {props.course.educationalLevel}
        </Card.Text>

        {props.showRating && (
          <Card.Text as='div' className='cardText'>
            <Rating value={props.course.rating} text={` rating`} />
          </Card.Text>
        )}
      </Card.Body>
      <Button variant='success' size='sm' onClick={() => setModalShow(true)}>
        See Review
      </Button>
      <FeedbackModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        course={props.course}
      />
    </Card>
  );
};

export default CourseCard;
