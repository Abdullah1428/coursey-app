import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import CourseDetailPresenter from './presenters/CourseDetailPresenter';
import CoursesPresenter from './presenters/CoursesPresenter';

import CourseModel from './models/CourseModel';

function App() {
  const courseModel = new CourseModel();

  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <Container>
        <main className="py-3">
          <Route
            path={'/course/:id'}
            render={() => <CourseDetailPresenter courseModel={courseModel} />}
            exact
          />
          <Route path={'/courses'} render={() => <CoursesPresenter />} exact />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
