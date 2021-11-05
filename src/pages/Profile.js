import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import HistoryTrip from "../components/HistoryTrip";

const Profile = () => {
  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <Card className="col-7 d-block" style={{ margin: "1em auto" }}>
          <Card.Body>
            <Row>
              <Col className="col">
                <Row>
                  <h1>Personal Info</h1>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/name.png" />
                  </Col>
                  <Col className="col mx-2">
                    <Row>
                      <b>UserName</b>
                    </Row>
                    <Row>
                      <span className="text-gray" style={{ fontSize: "small" }}>
                        Full Name
                      </span>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/mail.png" />
                  </Col>
                  <Col className="col mx-2">
                    <Row>
                      <b>email@email.com</b>
                    </Row>
                    <Row>
                      <span className="text-gray" style={{ fontSize: "small" }}>
                        Email
                      </span>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/phone.png" />
                  </Col>
                  <Col className="col mx-2">
                    <Row>
                      <b>01234567891011</b>
                    </Row>
                    <Row>
                      <span className="text-gray" style={{ fontSize: "small" }}>
                        Mobile phone
                      </span>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-1">
                    <Image src="/assets/icons/place.png" />
                  </Col>
                  <Col className="col mx-2">
                    <Row>
                      <b>Street name, City</b>
                    </Row>
                    <Row>
                      <span className="text-gray" style={{ fontSize: "small" }}>
                        Address
                      </span>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="col-3">
                <Row>
                  <Image src="/assets/profile/1.png" style={{ margin: "0 auto" }} />
                </Row>
                <Row className="my-3">
                  <Button variant="warning" style={{ margin: "0 0.5em", color: "#fff" }}>
                    Change Profile Picture
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <HistoryTrip />
    </Container>
  );
};

export default Profile;
