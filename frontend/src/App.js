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
import OverviewView from './views/OverviewView';

function App() {
  return (
    <Router>
      <AuthProvider>
        <header>
          <NavigationBar />
        </header>
        <Container>
          <main className='py-3'>
            <PrivateRoute path={'/'} component={OverviewView} exact />
            <PrivateRoute
              path={'/course/:id'}
              component={CourseDetailPresenter}
              exact
            />
            <Route path={'/courses'} component={FindCoursesPresenter} exact />
            <Route path={'/register'} component={RegisterPresenter} exact />
            <Route path={'/login'} component={LoginPresenter} exact />
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
