import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

function NavMenu () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Characters</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavMenu