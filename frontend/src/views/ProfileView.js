import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import ProfileDetails from '../components/ProfileDetails'

const ProfileView = (props) => {
  return (
    <div>
      <ProfileDetails profileModel={props.profileModel} />
    </div>
  );
};

export default ProfileView;
