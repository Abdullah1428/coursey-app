import { courseCardStyle } from '../styles/courseCardStyle';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import FeedbackModal from './FeedbackModal';

const CourseCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.toDateString();
  }

  return (
    <Card
      className='my-3 p-3 rounded'
      bg={courseCardStyle.bg}
      text={courseCardStyle.text}
      style={courseCardStyle}>
      <Card.Body>
        <Card.Title className='cardTitle'>{props.course.title}</Card.Title>
        {props.isFeedbackCard && (
          <Card.Subtitle className='mb-2 text-muted'>
            {toDateTime(props.course.createdAt.seconds)}
          </Card.Subtitle>
        )}

        {props.isFeedbackCard && (
          <Card.Text className='mb-2 text-muted'>{props.course.id}</Card.Text>
        )}

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
