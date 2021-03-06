import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import AlertModal from './AlertModal';

const NavigationBar = () => {
  const { currentUser, logoutUser } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [showLogoutErrorAlert, setShowLogoutErrorAlert] = useState(false);

  const handleLogoutHanlder = async () => {
    // logout the user or basically remove the context state or
    // call firebase.
    setShowLogoutAlert(false);

    const status = await logoutUser();

    if (status === 200) {
      history.push('/login');
    } else if (status === 400) {
      setShowLogoutErrorAlert(true);
    }
  };

  return (
    <>
      <AlertModal
        show={showLogoutAlert}
        onHide={() => setShowLogoutAlert(false)}
        title={'Logout'}
        message={'Are you sure you want to logout?'}
        out={true}
        logout={() => handleLogoutHanlder()}
        cancel={() => setShowLogoutAlert(false)}
      />
      <AlertModal
        show={showLogoutErrorAlert}
        onHide={() => setShowLogoutErrorAlert(false)}
        title={'Logout'}
        message={'Error in logging out!'}
      />
      <Navbar
        style={{ backgroundColor: '#ffa500' }}
        expand='lg'
        collapseOnSelect
        className='px-3'>
        <>
          <LinkContainer to={'/'}>
            <Navbar.Brand>
              <Image src='/assets/CourseyLogo.png' width='180' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              <Nav activeKey={location.pathname}>
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
                <LinkContainer to={'/mycoursey'}>
                  <Nav.Link>
                    <i className='fas fa-book'></i> My Coursey
                  </Nav.Link>
                </LinkContainer>
              </Nav>

              {currentUser ? (
                <NavDropdown
                  title={
                    <span>
                      <i className='fas fa-user'></i>
                      {currentUser.username}
                    </span>
                  }
                  id='username'>
                  <NavDropdown.Item onClick={() => setShowLogoutAlert(true)}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
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
