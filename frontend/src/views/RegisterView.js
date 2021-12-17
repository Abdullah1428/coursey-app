import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseyCarousel from '../components/CourseyCarousel';

const RegisterView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <Container>
      <Row className='text-center'>
        <h1>Coursey helps you find and review cool KTH courses</h1>
      </Row>
      <Row>
        <Col>
          <CourseyCarousel />
        </Col>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'> Make a Coursey Account </h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Form.Group controlId='formGroupPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                        type='password'
                        placeholder='Enter password'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    {/* fix for warning on console = controlId should not be the same. */}
                    <Form.Group controlId='formGroupConfirmPassword'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        value={props.confirmPassword}
                        onChange={(e) =>
                          props.setConfirmPassword(e.target.value)
                        }
                        type='password'
                        placeholder='Confirm password'
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Button
                      type='submit'
                      variant='success'
                      className='mt-3 w-100'>
                      Register
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Login</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterView;
