import "./header.css";
import { Container, Navbar, Image, Row, Col } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import LoggedIn from "./LoggedIn";
import Login from "../auth/Login";
import Register from "../auth/Register";

function Header() {
  const [state] = useContext(UserContext);

  if (!state.isLogin) {
    return (
      <>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Image src={Logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Row>
                <Col>
                  <Login />
                </Col>
                <Col>
                  <Register />
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Image src={Logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Row>
                <Col>
                  <LoggedIn />
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
