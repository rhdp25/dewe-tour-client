import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import tours from "../lists/listTour.json";

const DetailedTour = () => {
  const { id } = useParams();
  const detailTrip = tours.find((item) => item.id === id);

  const [count, setCount] = useState(1);

  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <Card className="col-9 d-block" style={{ margin: "1em auto", background: "#F1F1F1", border: "none" }}>
          <Card.Body>
            <Row>
              <h1>{detailTrip.tour}</h1>
              <span className="my-1">{detailTrip.country}</span>
            </Row>
            <Row>
              <Image className="my-1" src={detailTrip.photo[0]} />
            </Row>
            <Row>
              <Col className="col-4">
                <Image className="m-1" src={detailTrip.photo[1]} style={{ maxWidth: "100%" }} />
              </Col>
              <Col className="col-4">
                <Image className="m-1" src={detailTrip.photo[2]} style={{ maxWidth: "100%" }} />
              </Col>
              <Col className="col-4">
                <Image className="m-1" src={detailTrip.photo[3]} style={{ maxWidth: "100%" }} />
              </Col>
            </Row>
            <Row className="mt-3">
              <h4>Information Trip</h4>
            </Row>
            <Row>
              <Col>
                <Row>
                  <span>Accomodation</span>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/hotel.png" />
                  </Col>
                  <Col className="col">
                    <span className="mx-1">{detailTrip.accomodation}</span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <span>Transportation</span>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/plane.png" />
                  </Col>
                  <Col className="col">
                    <span className="mx-1">{detailTrip.transportation}</span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <span>Eat</span>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/meal.png" />
                  </Col>
                  <Col className="col">
                    <span className="mx-1">{detailTrip.eat}</span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <span>Duration</span>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/time.png" />
                  </Col>
                  <Col className="col">
                    <span className="mx-1">{detailTrip.duration}</span>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <span>Date Trip</span>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/calendar.png" />
                  </Col>
                  <Col className="col">
                    <span className="mx-1">{detailTrip.date_trip}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="my-1">
              <h4>Description</h4>
              <span>{detailTrip.description}</span>
            </Row>
            <Row className="mt-3">
              <Col className="col">
                <h3 className="text-orange">{detailTrip.price} / person</h3>
              </Col>
              <Col className="col-2">
                <Button onClick={() => setCount(count <= 1 ? count : count - 1)} variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                  -
                </Button>
                <span>{count}</span>
                <Button onClick={() => setCount(count + 1)} variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                  +
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col">
                <h3>Total :</h3>
              </Col>
              <Col className="col-4 text-end">
                <h3 className="mx-3 text-orange">{detailTrip.price}</h3>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col"></Col>
              <Col className="col-2">
                <Link to="/payment">
                  <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                    BOOK NOW
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default DetailedTour;
