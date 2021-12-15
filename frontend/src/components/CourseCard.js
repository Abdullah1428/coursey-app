import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { cardStyle } from '../styles/cardStyle';

const CourseCard = (props) => {
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

        <div style={{ margin: 10 }} />
        <Card.Text as='div' className='cardText'>
          <Rating value={props.course.rating} text={` rating`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
