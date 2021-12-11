import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { AuthProvider } from './context/AuthContext';

// common components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

// presenters
import CourseDetailPresenter from './presenters/CourseDetailPresenter';
import FindCoursesPresenter from './presenters/FindCoursesPresenter';
import RegisterPresenter from './presenters/RegisterPresenter';
import LoginPresenter from './presenters/LoginPresenter';

// protected route
import PrivateRoute from './context/PrivateRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <header>
          <NavigationBar />
        </header>
        <Container>
          <main className='py-3'>
            <PrivateRoute
              path={'/course/:id'}
              render={(props) => <CourseDetailPresenter {...props} />}
              exact
            />
            <PrivateRoute
              path={'/courses'}
              render={(props) => <FindCoursesPresenter {...props} />}
              exact
            />
            <Route
              path={'/register'}
              render={(props) => <RegisterPresenter {...props} />}
              exact
            />
            <Route
              path={'/login'}
              render={(props) => <LoginPresenter {...props} />}
              exact
            />
          </main>
        </Container>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </Router>
  );
}

export default App;
