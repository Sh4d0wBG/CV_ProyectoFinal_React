import React from "react";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header(){
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Curriculum Vitae</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="/education">Educacion</Nav.Link>
            <Nav.Link href="/interests">Intereses</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;


