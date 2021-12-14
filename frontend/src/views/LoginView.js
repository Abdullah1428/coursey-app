import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e);
  };
  return (
    <Container className='py-5'>
      <Row>
        <Col className='py-5'>
          <h1>Coursey</h1>
          <h3>Find cool KTH courses</h3>
        </Col>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'>Login to Coursey Account</h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formEmail'>
                      <Form.Label> Email Address </Form.Label>
                      <Form.Control
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                      <Form.Text>Login with your kth-email address</Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formPassword'>
                      <Form.Label> Password </Form.Label>
                      <Form.Control
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        required
                      />
                    </Form.Group>
                    <div className='p-2' />
                    <Button type='submit' className='mt-3 w-100'>
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='w-100 text-center mt-2'>
              Don't have an account? <Link to='/register'>Register</Link>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
