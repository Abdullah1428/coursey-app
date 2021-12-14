import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import FeedbackModal from './FeedbackModal';

const CourseCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card
      className="my-3 p-3 rounded"
      bg={'info'}
      text={'white'}
      style={{
        width: '18rem',
        height: '12rem',
      }}>
      <Card.Body>
        <Link to={`/course/${props.course.course}`}>
          <Card.Title>{props.course.course}</Card.Title>
        </Link>

        <Row>
          <Col className="d-flex align-items-center">
            <Card.Text>{props.course.title}</Card.Text>
          </Col>
          <Col xs={4}>
            <Button size="sm" onClick={() => setModalShow(true)}>
              See Full Feedback
            </Button>
          </Col>
        </Row>
        <Card.Text as="div">
          <Rating value={props.course.rating} text={` rating`} />
        </Card.Text>
      </Card.Body>
      <FeedbackModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        course={props.course}
      />
    </Card>
  );
};

export default CourseCard;
