import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { cardStyle } from '../styles/cardStyle';

const FeedbackCard = (props) => {
  return (
    <Card
      className='my-3 p-3 rounded'
      bg={cardStyle.bg}
      text={cardStyle.text}
      style={cardStyle}>
      <Card.Body>
        <Card.Title>{props.feedbackDetails.name}</Card.Title>
        <Card.Text>{props.feedbackDetails.text}</Card.Text>
        <Card.Text>
          <Rating
            value={props.feedbackDetails.rating}
            text={` num of reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackCard;
