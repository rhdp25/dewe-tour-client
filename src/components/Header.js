import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <Image src="/assets/logo.png" height="50px" className="d-inline-block align-top" />
        </Navbar.Brand>
        <div>
          <Login />
          <Register />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
