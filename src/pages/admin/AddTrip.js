import { Container, Row } from "react-bootstrap";
import FormAddTrip from "../../components/forms/FormAddTrip";

const AddTrip = () => {
  return (
    <>
      <Container fluid style={{ background: "#F1F1F1" }}>
        <Row>
          <FormAddTrip />
        </Row>
      </Container>
    </>
  );
};

export default AddTrip;
