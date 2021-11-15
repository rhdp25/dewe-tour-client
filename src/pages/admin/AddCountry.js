import { Container, Row } from "react-bootstrap";
import FormAddCountry from "../../components/forms/FormAddCountry";

const AddCountry = () => {
  return (
    <>
      <Container fluid style={{ background: "#F1F1F1" }}>
        <Row>
          <FormAddCountry />
        </Row>
      </Container>
    </>
  );
};

export default AddCountry;
