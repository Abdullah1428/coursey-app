import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

const RegisterForm = () => {
    return(
        <div>
            <Container>
                <Form>
                    <Form.Group controlId = "formGroupFirstName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder= "First Name"/>
                    </Form.Group>
                    <Form.Group controlId = "formGroupLastName">
                        <Form.Label></Form.Label>     
                        <Form.Control type="text" placeholder= "Last Name"/>
                    </Form.Group>
                    <Form.Group controlId = "formGroupEmail"> 
                        <Form.Label></Form.Label>   
                        <Form.Control type="email" placeholder= "KTH Email"/>
                    </Form.Group>
                    <Form.Group controlId = "formGroupCreatePassword">
                        <Form.Label></Form.Label> 
                        <Form.Control type="password" placeholder= "Create a Password"/>
                    </Form.Group>
                    <Form.Group controlId = "formGroupConfirmPassword"> 
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder= "Confirm Password"/>
                    </Form.Group>
                </Form>
            
                <Button>Register</Button>
            </Container>
        </div>
    );
};

export default RegisterForm;