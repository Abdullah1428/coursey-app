import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FeedbackCard from '../components/FeedbackCard';

const CourseDetailView = (props) => {
  const removeHTMLTagIfAny = (string) => {
    const regex = /(<([^>]+)>)/gi;
    const result = string.replace(regex, '');

    return result;
  };

  return (
    <div>
      <Link className='btn btn-dark my-3' to='/courses'>
        Go Back
      </Link>
      <Row>
        <h2>
          {props.courseDetail.courseCode} - {props.courseDetail.title},{' '}
          {props.courseDetail.credits} {props.courseDetail.creditUnitLabel}
        </h2>
        <p>
          {props.courseDetail.courseCode} - {props.courseDetail.titleOther},{' '}
          {props.courseDetail.credits} {props.courseDetail.creditUnitLabel}
        </p>
      </Row>
      <Row>
        <Col>
          <Row>
            <Image src='https://via.placeholder.com/300' fluid rounded />
          </Row>
          <Row>
            <h4>Course Information</h4>
            <p>Department Code: {props.courseDetail.department.code}</p>
            <p>Department Name: {props.courseDetail.department.name}</p>
            <p>
              Valid From Term:{' '}
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                props.courseDetail.publicSyllabusVersions[0].validFromTerm.term}
            </p>
            <p>Course State: {props.courseDetail.state}</p>
            <p>Cancelled State: {props.courseDetail.cancelled}</p>
            <p>Deactivated State: {props.courseDetail.deactivated}</p>
          </Row>
          <Row>
            <h4>Supplementary Information</h4>
            <p>
              {props.courseDetail.supplementaryInfo &&
                removeHTMLTagIfAny(props.courseDetail.supplementaryInfo)}
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h4>About</h4>
            <p>
              {props.courseDetail.recruitmentText &&
                removeHTMLTagIfAny(props.courseDetail.recruitmentText)}
            </p>
          </Row>
          <Row>
            <h4>Goals</h4>
            <p>
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                removeHTMLTagIfAny(
                  props.courseDetail.publicSyllabusVersions[0].courseSyllabus
                    .goals
                )}
            </p>
          </Row>
          <Row>
            <h4>Course Content</h4>
            <p>
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                removeHTMLTagIfAny(
                  props.courseDetail.publicSyllabusVersions[0].courseSyllabus
                    .content
                )}
            </p>
          </Row>
          <Row>
            <h4>Prerequisites</h4>
            <p>
              {props.courseDetail.prerequisites &&
                removeHTMLTagIfAny(props.courseDetail.prerequisites)}
            </p>
          </Row>
        </Col>
      </Row>
      <Row>
        <h3>Course Reviews</h3>
      </Row>
      <Row>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
        <Col>
          <FeedbackCard />
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetailView;
