import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BtnAddTrip() {
  return (
    <Container>
      <div className="d-flex col-10 justify-content-between mt-5" style={{ margin: "auto" }}>
        <h3>
          <b>Income Trip</b>
        </h3>
        <div>
          <Link to="/add-country">
            <Button variant="warning" className="mx-3">
              <b>Add Country</b>
            </Button>
          </Link>
          <Link to="/add-trip">
            <Button variant="warning">
              <b>Add Trip</b>
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default BtnAddTrip;
