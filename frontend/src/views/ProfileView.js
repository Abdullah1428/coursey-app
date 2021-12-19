import { Col, Row, Button, Form } from 'react-bootstrap';
import { shadowStyle } from '../styles/Styles';

const ProfileView = (props) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    props.handleUpdate(e);
  };

  return (
    <div style={shadowStyle}>
      <h2> Your Profile</h2>
      <Form onSubmit={(e) => handleUpdate(e)}>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-6'>
              <Form.Text> Email </Form.Text>
              <Form.Control
                value={props.email}
                disabled
                style={{ color: 'grey' }}
              />
            </Col>
            <Col className='col-sm-6'>
              <Form.Text> Username </Form.Text>
              <Form.Control
                value={props.username}
                disabled
                /* username can't be changed because it's used in currentUser 
                Auth context and sent from there to feedback database */
                placeholder={props.username}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-6'>
              <Form.Text> Name </Form.Text>
              <Form.Control
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
                type='text'
                placeholder={props.name}
              />
            </Col>
            <Col className='col-sm-6'>
              <Form.Text> School </Form.Text>
              <Form.Control
                as='select'
                value={props.school}
                onChange={(e) => props.setSchool(e.target.value)}>
                <option value=''>Select School</option>
                <option value='ABE / Architecture and community building'>
                  ABE / Architecture and community building
                </option>
                <option value='CBH / Chemistry, biotechnology and health'>
                  CBH / Chemistry, biotechnology and health
                </option>
                <option value='EECS / Electrical Engineering and Computer Science'>
                  EECS / Electrical Engineering and Computer Science
                </option>
                <option value='ITM / Industrial technology and management'>
                  ITM / Industrial technology and management
                </option>
                <option value='SCI / Engineering Science'>
                  SCI / Engineering Science
                </option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-1'>
            <Col className='col-sm-6'>
              <Form.Text>Program </Form.Text>
              <Form.Control
                value={props.program}
                as='select'
                onChange={(e) => props.setProgram(e.target.value)}>
                <option value=''>Select Program</option>
                {props.programs &&
                  props.programs.length > 0 &&
                  props.programs.map((prog, index) => (
                    <option key={index} value={prog.en}>
                      {prog.en}
                    </option>
                  ))}
              </Form.Control>
            </Col>
            <Col className='col-sm-6'>
              <Form.Text> Graduation Year </Form.Text>
              <Form.Control
                value={props.year}
                onChange={(e) => props.setYear(e.target.value)}
                type='text'
                placeholder={props.year}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row className='row-g-3 my-3'>
            <Col className='col-sm-12'>
              <Button type='submit' variant='success'>
                Update
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProfileView;
