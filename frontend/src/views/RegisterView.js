import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';

const RegisterView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <div>
      <Container className="py-5">
        <h3> Make a Coursey account </h3>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formGroupEmail">
            <Row className="row-mb-3">
              <Col className="col-sm-2">Email</Col>
              <Col className="col-sm-10">
                <Form.Control
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                  type="email"
                  placeholder="email@kth.se"
                />
              </Col>
            </Row>
          </Form.Group>
          <hr />

          <Form.Group controlId="formGroupPassword">
            <Row className="row-mb-3">
              <Col className="col-sm-2">Password</Col>
              <Col className="col-sm-10">
                <Form.Control
                  value={props.password}
                  onChange={(e) => props.setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                />
              </Col>
            </Row>
          </Form.Group>
          <hr />

          <Form.Group controlId="formGroupFirstName">
            <Row className="row-mb-3">
              <Col className="col-sm-2">Confirm Password</Col>
              <Col className="col-sm-10">
                <Form.Control
                  value={props.confirmPassword}
                  onChange={(e) => props.setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm password"
                />
              </Col>
            </Row>
          </Form.Group>
          <Button type="submit" className="mt-3">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterView;
