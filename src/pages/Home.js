import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CardMotto from "../components/CardMotto";
import GroupTour from "../components/GroupTour";

const Home = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <span className="explore">Explore</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="explore-mini">your amazing city together</span>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <span className="upper-search">Find great places to holliday</span>
          </Col>
        </Row>
        <Row>
          <Col className="col">
            <Form.Control name="search" type="text" />
          </Col>
          <Col className="col-1">
            <Button variant="warning" style={{ color: "#fff" }}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
      <CardMotto />
      <GroupTour />
    </>
  );
};

export default Home;
