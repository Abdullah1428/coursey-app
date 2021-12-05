import LoginForm from '../components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';

const LoginView = () => {
  return (
    <Container className='py-5'>
      <Row>
        <Col className='py-5'>dfksj</Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
