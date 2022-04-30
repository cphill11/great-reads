import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm.js';
import LoginForm from './LoginForm';
import '../../src/index.css';
import '../../src/media-queries.css';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <div>
          <Navbar.Brand as={Link} to='/' style={{fontSize: "200px", fontFamily: "'Tapestry', cursive", marginLeft: "20%"}}>
            Great Reads
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          </div>
          <div>
          <Navbar.Collapse id='navbar' style={{marginBottom: "12%"}}>
            <Nav className='ml-auto'>
              {/* <Nav.Link as={Link} to='/' style={{marginLeft: "23%", marginRight: "2%", backgroundColor: "#464649", border: "1px solid black", borderRadius: "5px", fontSize: "25px"}}>
                IDK
              </Nav.Link> */}
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved' style={{ padding: "20px",marginTop: "", marginLeft: "", backgroundColor: "rgb(72, 68, 82)", border: "2px solid black", borderRadius: "10px", fontSize: "25px"}}>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout} style={{ padding: "20px",marginTop: "", marginLeft: "", backgroundColor: "rgb(72, 68, 82)", border: "2px solid black", borderRadius: "10px", fontSize: "25px"}} >Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} style={{ padding: "20px",marginTop: "", marginLeft: "", backgroundColor: "rgb(72, 68, 82)", border: "2px solid black", borderRadius: "10px", fontSize: "25px"}}> Login or Sign Up </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;