import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const AddTrip = () => {
  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <Card className="col-9 d-block" style={{ margin: "1em auto", background: "#F1F1F1", border: "none" }}>
          <Card.Body>
            <Row>
              <Col className="my-5 col">
                <h3>Add Trip</h3>
              </Col>
            </Row>
            <Form>
              <Row className="my-2">
                <Form.Label>Title Trip</Form.Label>
                <Form.Control name="trip"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Country</Form.Label>
                <Form.Control name="country"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Accomodation</Form.Label>
                <Form.Control name="accomodataion"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Transportation</Form.Label>
                <Form.Control name="transport"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Eat</Form.Label>
                <Form.Control name="eat"></Form.Control>
              </Row>
              <Row className="my-2">
                <Col>
                  <Row>
                    <Form.Label>Duration</Form.Label>
                  </Row>
                  <Row>
                    <Col className="col-2">
                      <Form.Control name="days"></Form.Control>
                    </Col>
                    <Col className="col-2">Day</Col>
                    <Col className="col-2">
                      <Form.Control name="night"></Form.Control>
                    </Col>
                    <Col className="col-2">Night</Col>
                  </Row>
                </Col>
              </Row>
              <Row className="my-2">
                <Form.Label>Date Trip</Form.Label>
                <Form.Control name="date_trip"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Quota</Form.Label>
                <Form.Control name="quota"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" style={{ height: "100px" }} name="description"></Form.Control>
              </Row>
              <Row className="my-2">
                <Form.Label>Image</Form.Label>
                <Form.Control name="photo"></Form.Control>
              </Row>
              <Row className="my-4">
                <Col className="col-5"></Col>
                <Col className="col">
                  <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                    Add Trip
                  </Button>
                </Col>
                <Col className="col-5"></Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default AddTrip;
