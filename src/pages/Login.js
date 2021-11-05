import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} style={{ margin: "0 0.5em", color: "#fff" }}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email"></Form.Control>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
