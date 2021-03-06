import React from 'react';
import {
  Navbar,
  Nav /* Form, FormControl, Button, Container */,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigateBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      {/* Leftside Nav Logo/Link */}
      {/* TODO: Point this href to `/explore` if User is authenticated */}
      <Navbar.Brand href="/">Scratch Project</Navbar.Brand>
      {/* Rightside Nav Links */}
      {/* Set class for Login and Signup button Nav item to `margin-left: auto;`*/}
      <Nav className="ml-auto">
        {/* TODO: Remove inline styling in favor of Bootstrap or separate stylesheet */}
        {/* <Link to='/login'> */}
          <Nav.Link style={{ color: 'white' }} href="/login">
            Login
          </Nav.Link>
        {/* </Link> */}
        {/* <Link to='/signup'> */}
          <Nav.Link style={{ color: 'white' }} href="/signup">
            Signup
          </Nav.Link>
        {/* </Link> */}
      </Nav>
    </Navbar>
  );

  // // Search Bar Component
  // < Form inline >
  //   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //   <Button variant="outline-light">Search</Button>
  // </Form >
};

export default NavigateBar;
