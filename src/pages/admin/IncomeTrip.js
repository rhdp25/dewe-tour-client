import { Container, Row } from "react-bootstrap";
import BtnAddTrip from "../../components/buttons/BtnAddTrip";
import ListTour from "../../components/lists/ListTour";

const IncomeTrip = () => {
  return (
    <>
      <Container fluid style={{ background: "#F1F1F1" }}>
        <Row>
          <BtnAddTrip />
          <ListTour />
        </Row>
      </Container>
    </>
  );
};

export default IncomeTrip;
