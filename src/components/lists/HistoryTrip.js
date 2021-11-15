import React from "react";
import { Card, Col, Image, Row, Table } from "react-bootstrap";

import logoDW from "../../assets/logo_dark.png";
import qrCode from "../../assets/qr/qr.png";

import { useQuery } from "react-query";
import { API } from "../../config/api";

import convertRupiah from "rupiah-format";
import moment from "moment";

const HistoryTrip = ({ item }) => {
  let api = API();

  const { data: historyTrip } = useQuery("historyTripCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
        "Content-Type": "application/json",
      },
    };

    const response = await api.get("/history-trips", config);

    return response.data;
  });

  return (
    <>
      <h2 className="col-10 d-block" style={{ margin: "1em auto" }}>
        History Trip
      </h2>

      <Row>
        {historyTrip?.map((item, index) => {
          return (
            <Card className="col-10 d-block mb-3" style={{ margin: "1em auto" }}>
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
                      <span className="text-end text-gray">{moment(item.trip.dateTrip).format("DD MMMM YYYY")}</span>
                    </Row>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col className="col-9">
                    <Row>
                      <Col className="col-4">
                        <Row>
                          <h5>{item.trip.title}</h5>
                        </Row>
                        <Row>
                          <span className="text-gray">{item.trip.country.name}</span>
                        </Row>
                      </Col>
                      <Col className="col-4">
                        <Row>
                          <h5>Date Trip</h5>
                        </Row>
                        <Row>
                          <span className="text-gray">{moment(item.trip.dateTrip).format("DD MMM YYYY")}</span>
                        </Row>
                      </Col>
                      <Col className="col-4">
                        <Row>
                          <h5>Duration</h5>
                        </Row>
                        <Row>
                          <span className="text-gray">
                            {item.trip.day} Day {item.trip.night} Night
                          </span>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="my-4">
                      <Col className="col-4">
                        <Row>
                          {(() => {
                            if (item.status === "Waiting Payment") {
                              return <span className="badge-warning p-2 text-warning">{item.status}</span>;
                            } else if (item.status === "Waiting Approve") {
                              return <span className="badge-info p-2 text-primarys">{item.status}</span>;
                            } else if (item.status === "Cancel") {
                              return <span className="badge-danger p-2 text-danger">{item.status}</span>;
                            } else {
                              return <span className="badge-success p-2 text-success">{item.status}</span>;
                            }
                          })()}
                        </Row>
                      </Col>
                      <Col className="col-4">
                        <Row>
                          <h5>Accomodation</h5>
                        </Row>
                        <Row>
                          <span className="text-gray">{item.trip.accomodation}</span>
                        </Row>
                      </Col>
                      <Col className="col-4">
                        <Row>
                          <h5>Transportation</h5>
                        </Row>
                        <Row>
                          <span className="text-gray">{item.trip.transportation}</span>
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
                        <td>{item.user.fullName}</td>
                        <td>{item.user.gender}</td>
                        <td>{item.user.phone}</td>
                        <td>Qty</td>
                        <td>:</td>
                        <td>{item.counterQty}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>:</td>
                        <td className="text-red">{"  " + convertRupiah.convert(item.total)}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </>
  );
};

export default HistoryTrip;
