import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ margin: "0 0.5em", color: "#fff" }}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" required></Form.Control>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email"></Form.Control>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"></Form.Control>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" name="phone"></Form.Control>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" name="address" style={{ height: "100px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
