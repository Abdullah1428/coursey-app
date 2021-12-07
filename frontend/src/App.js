import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

// common components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// presenters
import CourseDetailPresenter from './presenters/CourseDetailPresenter';
import FindCoursesPresenter from './presenters/FindCoursesPresenter';
import ProfilePresenter from './presenters/ProfilePresenter';

// model
import CourseModel from './models/CourseModel';
import ProfileModel from './models/ProfileModel';
import RegisterPresenter from './presenters/RegisterPresenter';
import FeedbackModel from './models/FeedbackModel';
import FeedbackFormPresenter from './presenters/FeedbackFormPresenter';


function App() {
  const courseModel = new CourseModel();
  const profileModel = new ProfileModel();
  const feedbackModel = new FeedbackModel();

  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <Container>
        <main className='py-3'>
          <Route
            path={'/course/:id'}
            render={(props) => (
              <CourseDetailPresenter courseModel={courseModel} feedbackModel={feedbackModel} {...props} />
            )}
            exact
          />
          <Route
            path={'/courses'}
            render={(props) => <FindCoursesPresenter {...props} />}
            exact
          />
          <Route
            path={'/mycoursey'}
            render={(props) => <ProfilePresenter profileModel={profileModel} {...props} />}
            exact
          />
          <Route
            path={'/register'}
            render={(props) => <RegisterPresenter/>}
            exact
          />
          <Route
            path={'/feedback'}
            render={() => <FeedbackFormPresenter feedbackModel={feedbackModel}/>}
            exact
          />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
