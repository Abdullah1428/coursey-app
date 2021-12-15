import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { cardStyle } from '../styles/cardStyle';

export const shadow = {
  boxShadow: '0px 5px 15px 0px rgb(0 0 0 / 20%)',
  padding: '1rem',
  margin: '1rem',
};

export const CourseDetailView = (props) => {
  const removeHTMLTagIfAny = (string) => {
    const regex = /(<([^>]+)>)/gi;

    if (string === '' || typeof string === 'undefined') return '';

    const result = string.replace(regex, '');

    return result;
  };

  return (
    <div>
      <Row style={shadow} className='text-center'>
        <h2 className='courseDetailHeading'>
          {props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.title}, {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel}
        </h2>
        <h4 className='courseDetailHeading text-muted'>
          ({props.courseDetail.course.courseCode} -{' '}
          {props.courseDetail.course.titleOther},{' '}
          {props.courseDetail.course.credits}{' '}
          {props.courseDetail.course.creditUnitLabel})
        </h4>
      </Row>
      <Row style={shadow}>
        <Col sm={12} md={3} lg={4} xl={5}>
          <Row>
            <Image
              style={{ height: '300px', width: '300px' }}
              src={`/assets/kthlogo.png`}
              fluid
              rounded
            />
          </Row>
          <Row>
            <h4 className='courseDetailHeading'>Course Information</h4>
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
            <h4 className='courseDetailHeading'>Supplementary Information</h4>
            <p>
              {props.courseDetail.course.supplementaryInfo &&
                removeHTMLTagIfAny(props.courseDetail.course.supplementaryInfo)}
            </p>
          </Row>
        </Col>
        <Col sm={12} md={9} lg={8} xl={7}>
          <Row>
            <h4 className='courseDetailHeading'>About</h4>
            <p>
              {props.courseDetail.course.recruitmentText &&
                removeHTMLTagIfAny(props.courseDetail.course.recruitmentText)}
            </p>
          </Row>
          <Row>
            <h4 className='courseDetailHeading'>Goals</h4>
            <p>
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                removeHTMLTagIfAny(
                  props.courseDetail.publicSyllabusVersions[0].courseSyllabus
                    .goals
                )}
            </p>
          </Row>
          <Row>
            <h4 className='courseDetailHeading'>Course Content</h4>
            <p>
              {props.courseDetail.publicSyllabusVersions.length > 0 &&
                removeHTMLTagIfAny(
                  props.courseDetail.publicSyllabusVersions[0].courseSyllabus
                    .content
                )}
            </p>
          </Row>
          <Row>
            <h4 className='courseDetailHeading'>Prerequisites</h4>
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

  return (
    <>
      <hr />
      <ListGroup variant='flush' style={shadow}>
        <Row>
          <Col md={6}>
            <ListGroup.Item>
              <h2 className='courseDetailHeading text-center'>
                Taken this course?
              </h2>
              {props.currentUser ? (
                <>
                  <h4 className='courseDetailHeading'>
                    Share your experience with others
                  </h4>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='rating'>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as='select'
                        value={props.rating}
                        onChange={(e) => props.userRating(e.target.value)}>
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
                        onChange={(e) =>
                          props.userReview(e.target.value)
                        }></Form.Control>
                    </Form.Group>
                    <Button
                      style={{ marginTop: 20 }}
                      type='submit'
                      variant='success'>
                      Submit
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <h4 className='courseDetailHeading'>
                    <Link to={'/login'}>Login</Link> to share your experience
                    with others
                  </h4>
                </>
              )}
            </ListGroup.Item>
          </Col>

          <Col>
            <ListGroup className='text-center'>
              <ListGroup.Item>
                <h2 className='courseDetailHeading'>Overall Rating</h2>{' '}
                <p className='text-center'>4.5/5</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <div className='my-3' />
          <h2 className='courseDetailHeading text-center'>Course Reviews</h2>
          {props.courseReviews && props.courseReviews.length > 0 ? (
            props.courseReviews.map((r) => (
              <Col key={r.id} sm={12} md={6} lg={4} xl={3}>
                <div className='mt-4' />
                <Link
                  style={{ textDecoration: 'none' }}
                  to={{
                    pathname: `/course/${r.course}`,
                  }}>
                  <CourseCard
                    bg={cardStyle.bg}
                    text={cardStyle.text}
                    style={cardStyle}
                    course={r}
                    isFeedbackCard={true}
                  />
                </Link>
                {/* <Card
                  className='my-3 p-3 rounded'
                  bg={cardStyle.bg}
                  text={cardStyle.text}
                  style={cardStyle}>
                  <Card.Body>
                    <Card.Title>{r.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {toDateTime(r.createdAt.seconds)}
                    </Card.Subtitle>
                    {r.id}
                    <Card.Text className='cardText'>
                      <p>{r.review}</p>
                    </Card.Text>

                    <div style={{ margin: 10 }} />
                    <Card.Text as='div'>
                      <Rating value={r.rating} text={` ${r.rating} stars`} />{' '}
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
            ))
          ) : (
            <h4 className='courseDetailHeading'>
              No Reviews Yet for this Course.
            </h4>
          )}
        </Row>
      </ListGroup>
    </>
  );
};
