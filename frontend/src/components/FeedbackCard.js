import { Card } from 'react-bootstrap';
import Rating from './Rating';

const FeedbackCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>ChillUserStudent</Card.Title>
        <Card.Text>
          {props.feedbackDetails.text}
        </Card.Text>
        <Card.Text>
          <Rating value={props.feedbackDetails.rating} text={` num of reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackCard;
