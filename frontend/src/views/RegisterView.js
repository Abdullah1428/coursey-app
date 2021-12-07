import RegisterForm from '../components/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

const RegisterView = () => {
  return (
    <div>
      <Container className="noBorder">
        <h3> Make a Coursey account </h3>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegisterView;
