import { Card } from 'react-bootstrap';
import Rating from './Rating';

const FeedbackCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>ChillUserStudent</Card.Title>
        <Card.Text>
          Crazy course!! Had no time to sleep at all when I took this. Would
          recommend if you like to hurt yourself.
        </Card.Text>
        <Card.Text>
          <Rating value={4} text={` num of reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackCard;
