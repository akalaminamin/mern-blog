import React from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className={({ isActive }) => isActive && "text-primary"}
                as={NavLink}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={({ isActive }) => isActive && "text-primary"}
                as={NavLink}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                className={({ isActive }) => isActive && "text-primary"}
                as={NavLink}
                to="/signup"
              >
                Sign up
              </Nav.Link>
              <Nav.Link
                className={({ isActive }) => isActive && "text-primary"}
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex me-4">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="primary">Create Blog</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
