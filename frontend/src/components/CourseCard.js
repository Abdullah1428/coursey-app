import { courseCardStyle } from '../styles/Styles';
import { Card } from 'react-bootstrap';

const CourseCard = (props) => {
  return (
    <Card
      className='my-3 p-3 rounded'
      bg={courseCardStyle.bg}
      text={courseCardStyle.text}
      style={courseCardStyle}>
      <Card.Body>
        <Card.Title style={{ height: 40 }} className='cardTitle'>
          {props.course.title}
        </Card.Title>

        <Card.Text className='mb-2 text-success'>
          {props.course.course}
          {props.course.courseCode}
        </Card.Text>

        <Card.Text className='cardText text-warning'>
          {props.course.credits} {props.course.creditUnitLabel}
        </Card.Text>

        <Card.Text className='cardText text-muted'>
          LEVEL: {props.course.educationalLevel}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
