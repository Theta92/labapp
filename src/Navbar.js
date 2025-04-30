import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav bg="primary" variant="dark" expand="lg" className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
          <NavDropdown title="Dropdown link" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Sample Labs</NavDropdown.Item>
            <NavDropdown.Item href="#">More Labs</NavDropdown.Item>
            <NavDropdown.Item href="#">Already built Web Applications</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
