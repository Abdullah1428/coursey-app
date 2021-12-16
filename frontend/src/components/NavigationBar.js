import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavigationBar = () => {
  const { currentUser, logoutUser } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleLogoutHanlder = async () => {
    // logout the user or basically remove the context state or
    // call firebase.
    if (window.confirm('Are you sure you want to logout?')) {
      const status = await logoutUser();

      if (status === 200) {
        alert('Logged out successfully!');
        history.push('/login');
      } else if (status === 400) {
        alert('Error in logging out!');
      }
    }
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: '#ffa500' }}
        expand='lg'
        collapseOnSelect
        className='px-3'>
        <>
          <LinkContainer to={currentUser ? '/' : '/login'}>
            <Navbar.Brand>Coursey</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav activeKey={location.pathname} className='ml-auto'>
              <Nav>
                <LinkContainer to='/'>
                  <Nav.Link>
                    <i className='fas fa-home'></i> Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/courses'>
                  <Nav.Link>
                    <i className='fas fa-search'></i> Find Courses
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/popular'>
                  <Nav.Link>
                    <i className='fas fa-fire-alt'></i> Popular
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={currentUser ? '/mycoursey' : '/login'}>
                  <Nav.Link>
                    <i className='fas fa-book'></i> My Coursey
                  </Nav.Link>
                </LinkContainer>
              </Nav>

              {currentUser ? (
                <div className='d-flex justify-content-center'>
                  <i className='fas fa-user align-self-center'></i>
                  <NavDropdown title={`${currentUser.username}`} id='username'>
                    <NavDropdown.Item onClick={() => handleLogoutHanlder()}>
                      <i className='fas fa-sign-out-alt'></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <LinkContainer to='/login'>
                  <Nav activeKey={location.pathname}>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Login
                    </Nav.Link>
                  </Nav>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default NavigationBar;
