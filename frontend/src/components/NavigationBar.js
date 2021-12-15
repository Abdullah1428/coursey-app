import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const NavigationBar = () => {
  const { currentUser, logoutUser } = useAuth();
  const history = useHistory();

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
        className='px-3'
      >
        <>
          <LinkContainer to={currentUser ? '/' : '/login'}>
            <Navbar.Brand>Coursey</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              <Nav className='me-auto'>
                <LinkContainer to='/courses'>
                  <Nav.Link>
                    <i className='fas fa-search'></i> Find Courses
                  </Nav.Link>
                </LinkContainer>

                {/* <LinkContainer to='/recommendations'>
                    <Nav.Link>
                      <i className='fas fa-rocket'></i> Recommendations
                    </Nav.Link>
                  </LinkContainer> */}

                <LinkContainer to={currentUser ? '/mycoursey' : '/login'}>
                  <Nav.Link>
                    <i className='fas fa-book'></i> My Coursey
                  </Nav.Link>
                </LinkContainer>
              </Nav>

              {currentUser ? (
                <Nav.Link onClick={() => handleLogoutHanlder()}>
                  <i className='fas fa-user'></i> Logout
                </Nav.Link>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
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
