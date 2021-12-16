import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import FeedbackModal from './FeedbackModal';
import { Link } from 'react-router-dom';
import { feedbackCardStyle } from '../styles/Styles';

const FeedbackCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.toDateString();
  }

  return (
    <Card
      className="my-3 p-3 rounded"
      bg={feedbackCardStyle.bg}
      text={feedbackCardStyle.text}
      style={feedbackCardStyle}>
      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: `/course/${props.course.course}`,
          state: {
            path: props.path && props.path,
          },
        }}>
        <Card.Body>
<<<<<<< HEAD
          <Card.Title className="cardTitle">{props.course.title}</Card.Title>
=======
          <Card.Title style={{ height: 40 }} className='cardTitle'>
            {props.course.title}
          </Card.Title>
>>>>>>> 3c931645e5df8fd035e12aded0d6506b0bef130f

          <Card.Text className="mb-2 text-success">
            {props.course.course}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {toDateTime(props.course.createdAt.seconds)}
          </Card.Subtitle>

          <Card.Subtitle className="mb-2 text-muted">
            Review by: {props.course.username}
          </Card.Subtitle>

          <Card.Text className="cardText text-warning">
            {props.course.review}
          </Card.Text>

          <Card.Text as="div" className="cardText">
            <Rating value={props.course.rating} text={``} />
          </Card.Text>
        </Card.Body>
      </Link>
      <Button variant="success" size="sm" onClick={() => setModalShow(true)}>
        See Review
      </Button>
      <FeedbackModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        course={props.course}
        path={props.path}
      />
    </Card>
  );
};

export default FeedbackCard;
