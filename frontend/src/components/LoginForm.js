import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Button, Card } from "react-bootstrap";

const LoginForm = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label> Email Adress </Form.Label>
            <Form.Control type="email" placeholder="Example@kth.se" />
            <Form.Text>Log in with your kth-email adress</Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Log In
          </Button>{" "}
        </Form>
        <h2>New to Coursey?</h2>
        <Button>Sign Up Here</Button>
      </Container>
    </div>
  );
};

export default LoginForm;
