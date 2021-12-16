import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const ResetPasswordView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <Container className='py-5'>
      <Row>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'> Reset Password </h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={props.email}
                        type='email'
                        placeholder='email@kth.se'
                        onChange={(e) => props.setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant='success'
                      type='submit'
                      className='mt-3 w-100'>
                      Reset Password
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordView;
