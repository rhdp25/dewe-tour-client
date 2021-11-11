import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const PayPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ margin: "0 0.5em", color: "#fff" }}>
        Pay
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          Your payment will be confirmed within 1 x 24 hours.
          <br />
          To see orders click <Link to="/payment-wait/">Here</Link> thank you
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PayPopup;
