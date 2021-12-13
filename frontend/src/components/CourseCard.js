import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const CourseCard = (props) => {
  return (
    <Card
      className='my-3 p-3 rounded'
      bg={'info'}
      text={'white'}
      style={{
        width: '18rem',
        height: '12rem',
      }}
    >
      <Card.Body>
        <Card.Title>{'code'}</Card.Title>

        <Card.Text>{'name'}</Card.Text>

        <Card.Text as='div'>
          <Rating value={4} text={` num of reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
