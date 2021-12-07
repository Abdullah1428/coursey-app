import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const ProfileDetails = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Container className="noBorder">
          <Row>
            <Col className="col-sm-3">
              <Card.Text className="m-1">Name:</Card.Text>
            </Col>
            <Col className="text-secondary">
              <Card.Text className="m-1">
                {props.profileModel.firstName +
                  ' ' +
                  props.profileModel.lastName}
              </Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="col-sm-3">
              <Card.Text className="m-1">Email:</Card.Text>
            </Col>
            <Col className="text-secondary">
              <Card.Text className="m-1">{props.profileModel.email}</Card.Text>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col className="col-sm-3">
              <Card.Text className="m-1">Program:</Card.Text>
            </Col>
            <Col className="text-secondary">
              <Card.Text className="m-1">
                {props.profileModel.program}
              </Card.Text>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col className="col-sm-3">
              <Card.Text className="m-1">School:</Card.Text>
            </Col>
            <Col className="text-secondary">
              <Card.Text className="m-1">{props.profileModel.school}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="col-sm-3">
              <Card.Text className="m-0">Year:</Card.Text>
            </Col>
            <Col className="text-secondary">
              <Card.Text className="m-1">{props.profileModel.year}</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
              <Col ClassName="col-sm-12">
              <Button className= "btn btn-info">Edit</Button>
                </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ProfileDetails;
