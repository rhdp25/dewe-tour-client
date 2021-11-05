import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import tours from "../lists/listTour.json";

function GroupTour() {
  return (
    <Container className="my-5">
      <Row>
        <Col className="my-5 text-center">
          <h2>Group Tour</h2>
        </Col>
      </Row>
      <Row>
        {tours.map((item) => {
          return (
            <Col className="my-3">
              <Card key={item.id} style={{ width: "19rem" }}>
                <Link to={`/tour/${item.id}`}>
                  <Card.Img src={item.photo[0]} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.tour}</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col className="font-price">{item.price}</Col>
                      <Col className="font-country text-gray">{item.country}</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default GroupTour;
