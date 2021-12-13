import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';

const ProfileView = (props) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    props.handleUpdate(e);
  };
  return (
    <div>
      <Container className="noBorder">
        <Row className="row-g-3">
          <Col className="col-md-12">
            <p> email </p>
            <p> {props.email} </p>
          </Col>
        </Row>
        <Form onSubmit={(e) => handleUpdate(e)}>
          <Form.Group>
            <Row className="row-g-3">
              <Col className="col-md-12">
                <Form.Text> Name </Form.Text>
                <Form.Control
                  value={props.name}
                  onChange={(e) => props.setName(e.target.value)}
                  type="text"
                  placeholder={props.name}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Col className="col-sm-12">
              <Form.Text>Program </Form.Text>
              <Form.Control
                value={props.program}
                onChange={(e) => props.setProgram(e.target.value)}
                type="text"
                placeholder={props.program}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col className="col-sm-12">
              <Form.Text> School </Form.Text>
              <Form.Control
                value={props.school}
                onChange={(e) => props.setSchool(e.target.value)}
                type="text"
                placeholder={props.school}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col className="col-sm-12">
              <Form.Text> Year </Form.Text>
              <Form.Control
                value={props.year}
                onChange={(e) => props.setYear(e.target.value)}
                type="text"
                placeholder={props.year}
              />
            </Col>
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ProfileView;
