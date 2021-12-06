import CourseCard from '../components/CourseCard.js';

import { Row, Col } from 'react-bootstrap';

const CoursesView = (props) => {
  return (
    <>
      <Row>
        {props.courses.slice(10, 22).map((course) => (
          <Col key={course.code} sm={12} md={6} lg={4} xl={3}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CoursesView;
