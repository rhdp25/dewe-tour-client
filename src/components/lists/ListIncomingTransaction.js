import { Card, Col, Row, Table } from "react-bootstrap";
import PaymentApproval from "../modals/PaymentApproval";

import { useQuery } from "react-query";
import { API } from "../../config/api";

const ListIncomingTransaction = () => {
  let api = API();

  let { data: transactions } = useQuery("incomeTransactionCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        "Content-Type": "application/json",
      },
    };

    const response = await api.get("/incoming-transactions", config);
    console.log(transactions);
    return response.data;
  });

  return (
    <>
      <Card className="col-9 d-block mb-5" style={{ margin: "1em auto", background: "#F1F1F1", border: "none" }}>
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
                {transactions?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.user.fullName}</td>
                      <td>{item.trip.country.name}</td>
                      <td>{item.attachment}</td>
                      {(() => {
                        if (item.status === "Waiting Payment") {
                          return (
                            <td className="text-warning">
                              <b>{item.status}</b>
                            </td>
                          );
                        } else if (item.status === "Waiting Approve") {
                          return (
                            <td className="text-secondary">
                              <b>{item.status}</b>
                            </td>
                          );
                        } else if (item.status === "Cancel") {
                          return (
                            <td className="text-danger">
                              <b>{item.status}</b>
                            </td>
                          );
                        } else {
                          return (
                            <td className="text-success">
                              <b>{item.status}</b>
                            </td>
                          );
                        }
                      })()}
                      <td className="text-center">
                        <PaymentApproval item={item} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListIncomingTransaction;
