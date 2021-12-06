import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CourseCard = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Title>{props.course.code}</Card.Title>
        <Link to={`/course/${props.course.code}`} target={'_blank'}>
          <Card.Text>{props.course.name}</Card.Text>
        </Link>
        <Card.Text as='div'>
          <Rating value={4} text={` num of reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
