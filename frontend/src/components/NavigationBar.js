import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
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
        style={{ backgroundColor: '#DC8665' }}
        expand='lg'
        collapseOnSelect
        className='px-3'
      >
        <Container>
          <LinkContainer to={currentUser ? '/' : '/login'}>
            <Navbar.Brand>Coursey</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              {currentUser && (
                <Nav className='me-auto'>
                  <LinkContainer to='/courses'>
                    <Nav.Link>
                      <i className='fas fa-search'></i> Find Courses
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/recommendations'>
                    <Nav.Link>
                      <i className='fas fa-rocket'></i> Recommendations
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/mycoursey'>
                    <Nav.Link>
                      <i className='fas fa-book'></i> My Coursey
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              )}
              {currentUser ? (
                <NavDropdown title={'User Name'} id='username'>
                  <NavDropdown.Item onClick={() => handleLogoutHanlder()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
