import {
  Row,
  Col,
  Image,
  Form,
  Button,
  ListGroup,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { cardStyle } from '../styles/cardStyle';

export const CourseDetailView = (props) => {
  const removeHTMLTagIfAny = (string) => {
    const regex = /(<([^>]+)>)/gi;

    if (string === '' || typeof string === 'undefined') return '';

    const result = string.replace(regex, '');

    return result;
  };

  return (
    <div>
      <Row>
        <h2>
          {props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.title}, {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel}
        </h2>
        <h6 className='text-muted'>
          {props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.titleOther},{' '}
          {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel}
        </h6>
      </Row>
      <Row>
        <Col>
          <Row>
            <Image
              style={{ height: '300px', width: '300px' }}
              src={`/assets/kthlogo.png`}
              fluid
              rounded
            />
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

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t.toDateString();
  }

  return (
    <>
      <hr />
      <ListGroup variant='flush'>
        <Row>
          <Col md={6}>
            <ListGroup.Item>
              <h2>Taken this course?</h2>
              {props.currentUser ? (
                <>
                  <h4>Share your experience with others</h4>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='rating'>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as='select'
                        value={props.rating}
                        onChange={(e) => props.userRating(e.target.value)}
                      >
                        <option value=''>Select Rating</option>
                        <option value='1'>1 - Poor</option>
                        <option value='2'>2 - Fair</option>
                        <option value='3'>3 - Good</option>
                        <option value='4'>4 - Very Good</option>
                        <option value='5'>5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='title'>
                      <Form.Label> Review Title </Form.Label>
                      <Form.Control
                        value={props.title}
                        onChange={(e) => props.userTitle(e.target.value)}
                        type='text'
                        placeholder='Review title'
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='comment'>
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as='textarea'
                        row='5'
                        value={props.review}
                        placeholder='Write your review here...'
                        onChange={(e) => props.userReview(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      style={{ marginTop: 20 }}
                      type='submit'
                      variant='primary'
                    >
                      Submit
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <h4>
                    <Link to={'/login'}>Login</Link> to share your experience
                    with others
                  </h4>
                </>
              )}
            </ListGroup.Item>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>Overall</ListGroup.Item>
              <ListGroup.Item>Rating</ListGroup.Item>
              <Card
                className='my-3 p-3 rounded'
                bg={cardStyle.bg}
                text={cardStyle.text}
                style={cardStyle}
              >
                <h2>4.5/5</h2>
                maybe changes colors based on average, good, poor (red)
              </Card>
              <ListGroup.Item>Best Rating</ListGroup.Item>
              <ListGroup.Item>Lowest Rating</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <h2>Course Reviews</h2>
        <Row>
          {props.courseReviews && props.courseReviews.length > 0 ? (
            props.courseReviews.map((r) => (
              <Col key={r.id} sm={12} md={6} lg={4} xl={3}>
                <div className='mt-4' />
                <Card
                  className='my-3 p-3 rounded'
                  bg={cardStyle.bg}
                  text={cardStyle.text}
                  style={cardStyle}
                >
                  <Card.Body>
                    <Card.Title>{r.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {toDateTime(r.createdAt.seconds)}
                    </Card.Subtitle>
                    {r.id}
                    <Card.Text className='cardText'>{r.review}</Card.Text>

                    <div style={{ margin: 10 }} />
                    <Card.Text as='div'>
                      <Rating value={r.rating} text={` ${r.rating} stars`} />{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h4>No Reviews Yet for this Course.</h4>
          )}
        </Row>
      </ListGroup>
    </>
  );
};
