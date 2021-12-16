import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeedbackCard from '../components/FeedbackCard';
import { feedbackCardStyle } from '../styles/feedbackCardStyle';
import { shadowStyle } from '../styles/shadowStyle';

export const CourseDetailView = (props) => {
  const removeHTMLTagIfAny = (string) => {
    const regex = /(<([^>]+)>)/gi;

    if (string === '' || typeof string === 'undefined') return '';

    const result = string.replace(regex, '');

    return result;
  };

  return (
    <div>
      <Row style={shadowStyle} className='text-center'>
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
      <Row style={shadowStyle}>
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
      <ListGroup variant='flush' style={shadowStyle}>
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

          <Col className='align-self-center'>
            <ListGroup className='text-center'>
              <ListGroup.Item>
                <h1 className='courseDetailHeading'>Overall Rating</h1>
                {/* <p
                  style={{ fontSize: 50 }}
                  className='text-center mb-2 text-success'>
                  {props.courseReviews &&
                    `${props.courseReviews[
                      props.courseReviews.length - 1
                    ].averageRating.toFixed(2)} / 5`}
                </p> */}

                <h1 className='courseDetailHeading'>Number of Reviews</h1>
                {/* <p
                  style={{ fontSize: 50 }}
                  className='text-center mb-2 text-warning'>
                  {props.courseReviews &&
                    `${
                      props.courseReviews[props.courseReviews.length - 1]
                        .totalFeedbacks
                    }`}
                </p> */}
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
                <FeedbackCard
                  bg={feedbackCardStyle.bg}
                  text={feedbackCardStyle.text}
                  style={feedbackCardStyle}
                  course={r}
                />
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
