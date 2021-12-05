import CourseCard from '../components/CourseCard.js';
import { Card } from 'react-bootstrap';

const CourseDetail = (props) => {
  return props.courses.slice(1, 10).map((e) => {
    return <CourseCard details={e} />;
  });
};

export default CourseDetail;
