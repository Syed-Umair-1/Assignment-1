import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
       <Navbar  className='nav_container' bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">Assignment</Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
