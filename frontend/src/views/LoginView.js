import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';

const LoginView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e);
  };
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-5">
          <h1>Coursey</h1>
          <h3>Find cool KTH courses</h3>
        </Col>
        <Col>
          <Row>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formEmail">
                <Form.Label> Email Address </Form.Label>
                <Form.Control
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                  type="email"
                  placeholder="example@kth.se"
                />
                <Form.Text>Log in with your kth-email address</Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  value={props.password}
                  onChange={(e) => props.setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button type="submit">Log In</Button>
            </Form>
          </Row>
          <Row>
            <p>New to Coursey?</p>
            <Button>Sign Up</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
