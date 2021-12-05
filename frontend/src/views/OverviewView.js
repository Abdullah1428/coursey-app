import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

const OverviewView = () => {
  return (
    <div>
      <Container>
        <Row>
          <h2>Your Recent Courses</h2>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <CourseCard />
            </Col>
          ))}
        </Row>

        <Row>
          <h2>Popular Courses</h2>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <CourseCard />
            </Col>
          ))}
        </Row>

        <Row>
          <h2>Recommended Courses</h2>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <CourseCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OverviewView;
