import React from "react";
import { Card, Col, Image, Row, Table } from "react-bootstrap";

import logoDW from "../../assets/logo_dark.png";
import qrCode from "../../assets/qr/qr.png";

const HistoryTrip = () => {
  return (
    <>
      <h2 className="col-10 d-block" style={{ margin: "1em auto" }}>
        History Trip
      </h2>

      <Row>
        <Card className="col-10 d-block mb-5" style={{ margin: "1em auto" }}>
          <Card.Body>
            <Row>
              <Col className="col">
                <Image src={logoDW} height="50px" />
              </Col>
              <Col className="col-3">
                <Row>
                  <h2 className="text-end">Booking</h2>
                </Row>
                <Row>
                  <span className="text-end text-gray">Saturday, 22 Juy 2020</span>
                </Row>
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="col-9">
                <Row>
                  <Col className="col-4">
                    <Row>
                      <h5>6D/4N Fun Tassie Vacation</h5>
                    </Row>
                    <Row>
                      <span className="text-gray">Australia</span>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Row>
                      <h5>Date Trip</h5>
                    </Row>
                    <Row>
                      <span className="text-gray">26 August 2020</span>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Row>
                      <h5>Duration</h5>
                    </Row>
                    <Row>
                      <span className="text-gray">6 Day 4 Night</span>
                    </Row>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col className="col-4">
                    <Row className="text-green">
                      <span>Approve</span>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Row>
                      <h5>Accomodation</h5>
                    </Row>
                    <Row>
                      <span className="text-gray">Hotel 4 Nights</span>
                    </Row>
                  </Col>
                  <Col className="col-4">
                    <Row>
                      <h5>Transportation</h5>
                    </Row>
                    <Row>
                      <span className="text-gray">Qatar Airways</span>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="col">
                <Row>
                  <Image className="d-block" src={qrCode} style={{ margin: "0.5em auto", width: "125px" }} />
                </Row>
                <Row>
                  <span className="text-center text-gray">TCK0101</span>
                </Row>
              </Col>
            </Row>
            <Row>
              <Table striped>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Customer name</td>
                    <td>Male</td>
                    <td>01234567891011</td>
                    <td>Qty</td>
                    <td>:</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>:</td>
                    <td className="text-red">IDR. 12,398,000</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default HistoryTrip;
