import { Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../../config/api";

import BookingForm from "../../components/forms/BookingForm";

const Payment = () => {
  let api = API();

  const { data: transactions } = useQuery("bookingCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };

    const response = await api.get("/transactions", config);

    return response.data;
  });

  return (
    <>
      <Container fluid style={{ background: "#F1F1F1", minHeight: "100vh" }}>
        <Row>
          <div className="col-11" style={{ margin: "0 auto" }}>
            {transactions?.map((item, index) => (
              <BookingForm item={item} key={index} />
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
