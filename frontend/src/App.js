import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

// common components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// presenters
import CourseDetailPresenter from './presenters/CourseDetailPresenter';
import FindCoursesPresenter from './presenters/FindCoursesPresenter';

// model
import CourseModel from './models/CourseModel';

function App() {
  const courseModel = new CourseModel();

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
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
