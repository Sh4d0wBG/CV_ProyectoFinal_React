import React from "react";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Header(){
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Curriculum Vitae</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre Mi</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
            <Nav.Link href="#education">Educación</Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;


