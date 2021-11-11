import "./auth.css";

import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form, Alert } from "react-bootstrap";

import Palm from "../../assets/images/palm.png";
import Hibiscus from "../../assets/images//hibiscus.png";

import { useMutation } from "react-query";

import { API } from "../../config/api";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();
  let api = API();

  const [, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data for login process
      const response = await api.post("/login", config);

      console.log(response);

      // Checking process
      if (response.status === "success") {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });

        // Status check
        if (response.data.role === "admin") {
          history.push("/transaction/");
        } else {
          history.push("/");
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Login failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      <Button variant="outline-warning mr-3 mt-3" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-head">
          <img className="palm" src={Palm} alt="" />
          <img className="hibiscus" src={Hibiscus} alt="" />
        </div>
        <h3 className="text-center">
          <b>Login</b>
        </h3>
        <Modal.Body>
          {message && message}
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} name="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} name="password" onChange={handleChange} />
            </Form.Group>
            <div className="d-grid gap-2 mt-5">
              <Button variant="warning" size="lg" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
