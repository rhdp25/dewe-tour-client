import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import tours from "../lists/listTour.json";

function IncomeTrip() {
  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <Card className="col-10 d-block" style={{ margin: "1em auto", background: "#F1F1F1", border: "none" }}>
          <Card.Body>
            <Row>
              <Col className="my-5 col">
                <h3>Income Trip</h3>
              </Col>
              <Col className="my-5 col-2">
                <Link to="/add-trip">
                  <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                    Add Trip
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              {tours.map((item) => {
                return (
                  <Col className="my-3">
                    <Card key={item.id} style={{ width: "19rem" }}>
                      <Card.Img src={item.photo[0]} />
                      <Card.Body>
                        <Card.Title>{item.tour}</Card.Title>
                        <Card.Text>
                          <Row>
                            <Col className="font-price">{item.price}</Col>
                            <Col className="font-country">{item.country}</Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default IncomeTrip;
