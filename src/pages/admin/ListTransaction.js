import React from "react";
import { Container, Row } from "react-bootstrap";
import ListIncomingTransaction from "../../components/lists/ListIncomingTransaction";

const ListTransaction = () => {
  return (
    <Container fluid style={{ background: "#F1F1F1" }}>
      <Row>
        <ListIncomingTransaction />
      </Row>
    </Container>
  );
};

export default ListTransaction;
