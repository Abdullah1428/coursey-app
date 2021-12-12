import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating';

export const CourseDetailView = (props) => {
  const removeHTMLTagIfAny = (string) => {
    const regex = /(<([^>]+)>)/gi;

    if (string === '' || typeof string === 'undefined') return '';

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
          {props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.title}, {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel}
        </h2>
        <p>
          {props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.titleOther},{' '}
          {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel}
        </p>
      </Row>
      <Row>
        <Col>
          <Row>
            <Image src='https://via.placeholder.com/300' fluid rounded />
          </Row>
          <Row>
            <h4>Course Information</h4>
            <p>Department Code: {props.courseDetail.course.department.code}</p>
            <p>Department Name: {props.courseDetail.course.department.name}</p>
            <p>
              Valid From Term:{' '}
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                props.courseDetail.publicSyllabusVersions[0].validFromTerm.term}
            </p>
            <p>Course State: {props.courseDetail.course.state}</p>
            <p>
              Course Cancelled:{' '}
              {props.courseDetail.course.cancelled ? 'Yes' : 'No'}
            </p>
            <p>
              Course Deactivated:{' '}
              {props.courseDetail.course.deactivated ? 'Yes' : 'No'}
            </p>
          </Row>
          <Row>
            <h4>Supplementary Information</h4>
            <p>
              {props.courseDetail.course.supplementaryInfo &&
                removeHTMLTagIfAny(props.courseDetail.course.supplementaryInfo)}
            </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h4>About</h4>
            <p>
              {props.courseDetail.course.recruitmentText &&
                removeHTMLTagIfAny(props.courseDetail.course.recruitmentText)}
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
              {props.courseDetail.course.prerequisites &&
                removeHTMLTagIfAny(props.courseDetail.course.prerequisites)}
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export const CourseReviews = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitReview();
  };

  const dummyReviews = [
    {
      id: 1,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 2,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 3,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 4,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 5,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 6,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 7,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
    {
      id: 8,
      title: 'title',
      rating: 2,
      time: 'time',
      review: 'comment',
    },
  ];

  return (
    <>
      <hr />
      <ListGroup variant='flush'>
        <Col md={6}>
          <ListGroup.Item>
            <h2>Write Your Review</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='rating'>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as='select'
                  value={props.rating}
                  onChange={(e) => props.userRating(e.target.value)}
                >
                  <option value=''>Select...</option>
                  <option value='1'>1 - Poor</option>
                  <option value='2'>2 - Fair</option>
                  <option value='3'>3 - Good</option>
                  <option value='4'>4 - Very Good</option>
                  <option value='5'>5 - Excellent</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='comment'>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as='textarea'
                  row='5'
                  value={props.review}
                  onChange={(e) => props.userReview(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button style={{ marginTop: 20 }} type='submit' variant='primary'>
                Submit
              </Button>
            </Form>
          </ListGroup.Item>
        </Col>
        <h2>Course Reviews</h2>
        {dummyReviews.map((r) => (
          <ListGroup.Item key={r.id}>
            <strong>{r.title}</strong>
            <Rating value={r.rating} />
            <p>{r.time}</p>
            <p>{r.review}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
