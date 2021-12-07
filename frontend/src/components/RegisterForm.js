import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const RegisterForm = () => {
    return(
        <div>
            <Container className="noBorder">
                <Form>
                    <Form.Group controlId = "formGroupFirstName">
                    <Row className="row-g-3">
                        <Col className= "col-md-2">
                        First name
                        </Col>
                        <Col className="col-sm-4">
                        <Form.Control type="text" placeholder= "First Name"/>
                        </Col>
                        <Col className= "col-sm-2">
                        Last name
                        </Col>
                        <Col className="col-sm-4">
                        <Form.Control type="text" placeholder= "Last Name"/>
                        </Col>
                    </Row>
                    </Form.Group>
                    <hr/>
                    <Form.Group controlId = "formGroupEmail">
                    <Row className="row-mb-3">
                        <Col className= "col-sm-2">
                        Email
                        </Col>
                        <Col className="col-sm-10">
                        <Form.Control type="email" placeholder= "email@kth.se"/>
                        </Col>
                    </Row>
                    </Form.Group>
                    <hr/>

                    <Form.Group controlId = "formGroupPassword">
                    <Row className="row-mb-3">
                        <Col className= "col-sm-2">
                        Password
                        </Col>
                        <Col className="col-sm-10">
                        <Form.Control type="password" placeholder= "password"/>
                        </Col>
                    </Row>
                    </Form.Group>
                    <hr/>

                    <Form.Group controlId = "formGroupFirstName">
                    <Row className="row-mb-3">
                        <Col className= "col-sm-2">
                        Confirm Password
                        </Col>
                        <Col className="col-sm-10">
                        <Form.Control type="password" placeholder= "password"/>
                        </Col>
                    </Row>
                    </Form.Group>
                </Form>
                <Button className="mt-3">Register</Button>

            </Container>
        </div>
    );
};

export default RegisterForm;