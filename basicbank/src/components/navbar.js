import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class Navbarr extends Component {

  render() {
    return (
        <>
        <Navbar bg="primary" variant="dark">
        <Container >
        
          <Navbar.Brand href="/">The Sparks Foundation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/customers">Customers</Nav.Link>
            <Nav.Link href="/transactions">Transcations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      
      </>
    );
  }
}