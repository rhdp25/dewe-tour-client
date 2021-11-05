import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardMotto = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <Card className="card-motto">
              <Card.Img className="d-block" variant="top" src="/assets/icons/guarantee.png" style={{ margin: "1em auto", width: "5rem" }} />
              <Card.Body className="my-1">
                <Card.Title>Best Price Guarantee</Card.Title>
                <Card.Text>A small river named Duren flows by their place and supplies</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-motto">
              <Card.Img className="d-block" variant="top" src="/assets/icons/heart.png" style={{ margin: "1em auto", width: "5rem" }} />
              <Card.Body className="my-1">
                <Card.Title>Travellers Love Us</Card.Title>
                <Card.Text>A small river named Duren flows by their place and supplies</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-motto">
              <Card.Img className="d-block" variant="top" src="/assets/icons/agent.png" style={{ margin: "1em auto", width: "5rem" }} />
              <Card.Body className="my-1">
                <Card.Title>
                  Best Travel‎‎
                  <br />
                  Agent
                </Card.Title>
                <Card.Text>A small river named Duren flows by their place and supplies</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-motto">
              <Card.Img className="d-block" variant="top" src="/assets/icons/support.png" style={{ margin: "1em auto", width: "5rem" }} />
              <Card.Body className="my-1">
                <Card.Title>Our Dedicated Support</Card.Title>
                <Card.Text>A small river named Duren flows by their place and supplies</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardMotto;
