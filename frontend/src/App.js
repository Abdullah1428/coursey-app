import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import OverviewPresenter from './presenters/OverviewPresenter';
import MyCourseyPresenter from './presenters/MyCourseyPresenter';
import PopularPresenter from './presenters/PopularPresenter';
// protected route
import PrivateRoute from './context/PrivateRoutes';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <AuthProvider>
        <header>
          <NavigationBar />
        </header>
        <Container>
          <main className='py-3'>
            <Switch>
              <PrivateRoute path={'/'} component={OverviewPresenter} exact />
              <PrivateRoute
                path={'/mycoursey'}
                component={MyCourseyPresenter}
                exact
              />
              <Route
                path={'/course/:id'}
                component={CourseDetailPresenter}
                exact
              />
              <Route path={'/courses'} component={FindCoursesPresenter} exact />
              <Route path={'/register'} component={RegisterPresenter} exact />
              <Route path={'/login'} component={LoginPresenter} exact />
              <Route path={'/popular'} component={PopularPresenter} exact />
              <Route component={NotFound} />
            </Switch>
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
