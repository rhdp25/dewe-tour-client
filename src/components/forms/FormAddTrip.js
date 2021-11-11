import "./formAddTrip.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const FormAddTrip = () => {
  const handleTrip = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="col-10 mt-5" style={{ margin: "auto" }}>
          <Card style={{ margin: "0.25em auto", background: "#F1F1F1", border: "none" }}>
            <Card.Body>
              <Row>
                <Col className="mb-5 col">
                  <h3>Add Trip</h3>
                </Col>
              </Row>
              <Form onSubmit={handleTrip}>
                <Row className="mb-3">
                  <Form.Label>Title Trip</Form.Label>
                  <Form.Control name="title"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select name="country">
                    <option>Choose country...</option>
                  </Form.Select>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Accomodation</Form.Label>
                  <Form.Control name="accomodataion"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Transportation</Form.Label>
                  <Form.Control name="transportation"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Eat</Form.Label>
                  <Form.Control name="eat"></Form.Control>
                </Row>
                <Row className="mb-1">
                  <Form.Label>Duration</Form.Label>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control className="input-2" name="day"></Form.Control>
                  </Col>
                  <Col>
                    <Form.Label className="mar-5">Days</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control className="input-2" name="night"></Form.Control>
                  </Col>
                  <Col>
                    <Form.Label className="mar-5">Nights</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Date Trip</Form.Label>
                  <Form.Control name="dateTrip"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control name="price"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Quota</Form.Label>
                  <Form.Control name="quota"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" style={{ height: "100px" }} name="description"></Form.Control>
                </Row>
                <Row className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control name="photo"></Form.Control>
                </Row>
                <Row className="mb-10">
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
        </div>
      </Container>
    </>
  );
};

export default FormAddTrip;
