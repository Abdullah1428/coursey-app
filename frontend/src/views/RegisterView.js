import RegisterForm from '../components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const RegisterView = () => {
  return (
    <div>
      <Container className='m-auto'>
        <Row>
          <Col className='m-auto'>hey</Col>
          <Col className='m-auto'>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterView;
