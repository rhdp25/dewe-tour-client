import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import transactions from "../lists/listTransaction.json";
import PaymentApproval from "./PaymentApproval";

const ListTransaction = () => {
  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <Card className="col-9 d-block" style={{ margin: "1em auto", background: "#F1F1F1", border: "none" }}>
          <Card.Body>
            <Row>
              <Col className="my-5 col">
                <h3>Incoming Transaction</h3>
              </Col>
            </Row>
            <Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Users</th>
                    <th>Trip</th>
                    <th>Bukti Transfer</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.users}</td>
                        <td>{item.trip}</td>
                        <td>{item.proof}</td>
                        <td className={item.format}>{item.status}</td>
                        <td>
                          <PaymentApproval />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default ListTransaction;
