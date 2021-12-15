import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { cardStyle } from '../styles/cardStyle';

const PopularCard = (props) => {
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.toDateString();
  }

  return (
    <Card
      className='my-3 p-3 rounded'
      bg={cardStyle.bg}
      text={cardStyle.text}
      style={cardStyle}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: 20 }}>{props.course.course}</Card.Title>

        <Card.Subtitle className='mb-2 text-muted'>
          {toDateTime(props.course.createdAt.seconds)}
        </Card.Subtitle>

        <Card.Text>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        <Card.Text as='div'>{`Num of Reviews: ${props.course.totalFeedbacks}`}</Card.Text>

        <Card.Text as='div'>Average Rating:</Card.Text>
        {props.showRating && (
          <Card.Text as='div'>
            <Rating
              value={props.course.averageRating}
              text={` ${props.course.averageRating} stars`}
            />
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default PopularCard;
