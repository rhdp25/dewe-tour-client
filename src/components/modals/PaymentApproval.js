import { useState } from "react";
import { Button, Image, Modal, Row, Col, Table } from "react-bootstrap";

import searchIcon from "../../assets/icons/search.png";
import logoDW from "../../assets/logo_dark.png";

import convertRupiah from "rupiah-format";
import moment from "moment";

import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { API } from "../../config/api";

const PaymentApproval = ({ item, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let api = API();
  let history = useHistory();

  let approve = "Approve";
  const handleApprove = useMutation(async () => {
    try {
      const data = {
        status: approve,
      };

      console.log(data);

      const body = JSON.stringify(data);

      const config = {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          "Content-Type": "application/json",
        },
        body,
      };

      await api.patch("/incoming-transactions/" + item.id, config);

      history.go();
    } catch (error) {
      console.log(error);
    }
  });

  let cancel = "Cancel";
  const handleCancel = useMutation(async () => {
    try {
      const data = {
        status: cancel,
      };

      console.log(data);

      const body = JSON.stringify(data);

      const config = {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          "Content-Type": "application/json",
        },
        body,
      };

      await api.patch("/incoming-transactions/" + item.id, config);

      history.go();
    } catch (error) {
      console.log(error);
    }
  });

  let statusPay;
  if (item.status === "Waiting Payment") {
    statusPay = "badge-warning p-2 text-warning";
  } else if (item.status === "Waiting Approve") {
    statusPay = "badge-info p-2 text-primary";
  } else if (item.status === "Cancel") {
    statusPay = "badge-danger p-2 text-danger";
  } else {
    statusPay = "badge-success p-2 text-success";
  }

  return (
    <>
      <Image src={searchIcon} onClick={handleShow} style={{ margin: "0 0.5em" }} />

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Body>
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
                    <span className="text-gray">{moment(item.trip.dateTrip).format("DD MMMM YYYY")}</span>
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
                    <span className={statusPay}>{item.status}</span>
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
                <Image src={item.attachment[0]} />
              </Row>
              <Row>
                <span className="text-center text-gray">upload payment proof</span>
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
                  <td className="text-red"> {"  " + convertRupiah.convert(item.total)}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row style={{ margin: "0.5em auto" }}>
            <Col className="col-10"></Col>
            <Col className="col-1">
              <Button variant="danger" onClick={() => handleCancel.mutate()}>
                Cancel
              </Button>
            </Col>
            <Col className="col-1">
              <Button variant="success" onClick={() => handleApprove.mutate()}>
                Approve
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentApproval;
