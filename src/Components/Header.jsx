// import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import img from './tata-logo.png';
// import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function BasicExample() {
  return (

    <Navbar  variant="dark" expand="lg" className="bg-dark justify-content-center p-3 ">
      <Navbar.Brand className='Brand-name' href="">Gadget Sphere</Navbar.Brand>
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="Navbar">
            <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/'> Home </Link>
            </Nav.Link>

            <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/about'>About</Link>
            </Nav.Link>

            <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/services'>Services</Link>
            </Nav.Link>
            
            {/* <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/new'>New</Link>
            </Nav.Link> */}

            <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/products'>Products</Link>
            </Nav.Link>

            <Nav.Link className="text-center mx-3  font-weight-bold"> 
                <Link to='/contact'>Contact</Link>
            </Nav.Link>
            </Nav>
            {/* <Link to='/login'>
          <div className="btns">
        <Button variant="outline-light">Sign In</Button>
        </div>
        </Link> */}

          </Navbar.Collapse>
     
    </Navbar>
    
  );
}
export default BasicExample;
