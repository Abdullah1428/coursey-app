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


function App() {
  const courseModel = new CourseModel();
  const profileModel = new ProfileModel();

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
              <CourseDetailPresenter courseModel={courseModel} {...props} />
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
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
