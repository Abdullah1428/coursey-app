import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { feedbackCardStyle } from '../styles/Styles';

const PopularCard = (props) => {
  return (
    <Card
      className='my-3 p-3 rounded'
      bg={feedbackCardStyle.bg}
      text={feedbackCardStyle.text}
      style={feedbackCardStyle}>
      <Card.Body>
        <Card.Title className='cardTitle'>
          {props.course.courseTitle}
        </Card.Title>

        <Card.Text className='mb-2 text-success'>
          {props.course.course}
        </Card.Text>

        <Card.Text>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        <Card.Text as='div'>{`Num of Reviews: ${props.course.totalFeedbacks}`}</Card.Text>

        <Card.Text as='div'>Average Rating:</Card.Text>
        <Card.Text as='div'>
          <Rating
            value={props.course.averageRating}
            text={` ${props.course.averageRating.toFixed(2)}`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PopularCard;
