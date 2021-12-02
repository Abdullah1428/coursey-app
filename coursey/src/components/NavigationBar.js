import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavigationBar = () => {
  const handleLogoutHanlder = () => {
    // logout the user or basically remove the context state or
    // call firebase.
  }

  return (
    <>
      <Navbar
        style={{ backgroundColor: '#DC8665' }}
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Coursey</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              <Nav className='me-auto'>
                <LinkContainer to='/findcourses'>
                  <Nav.Link>Find Courses</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/recommendations'>
                  <Nav.Link>Recommendations</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/mycoursey'>
                  <Nav.Link>My Coursey</Nav.Link>
                </LinkContainer>
              </Nav>
              <NavDropdown title={'User Name'} id='username'>
                <NavDropdown.Item onClick={() => handleLogoutHanlder()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
