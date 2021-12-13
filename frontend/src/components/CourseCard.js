import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CourseCard = (props) => {
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

        <Card.Text>{props.course.title}</Card.Text>

        <Card.Text as="div">
          <Rating value={props.course.rating} text={` rating`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
