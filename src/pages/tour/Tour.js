import { Container, Row } from "react-bootstrap";
import DetailedTour from "../../components/forms/DetailedTour";

import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import { API } from "../../config/api";

const Tour = () => {
  let { id } = useParams();
  let api = API();

  let { data: trips } = useQuery("detailedTripCache", async () => {
    const config = {
      method: "GET",
    };

    const response = await api.get("/trips/" + id, config);
    return response.data;
  });

  return (
    <>
      <Container fluid style={{ background: "#F1F1F1", minHeight: "100vh" }}>
        <Row>{trips && <DetailedTour item={trips} />}</Row>
      </Container>
    </>
  );
};

export default Tour;
