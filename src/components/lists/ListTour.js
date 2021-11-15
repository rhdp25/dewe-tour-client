import "./listTour.css";

import { Container, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";
import { API } from "../../config/api";

import convertRupiah from "rupiah-format";

const ListTour = () => {
  let api = API();

  let { data: trips } = useQuery("tripsCache", async () => {
    const config = {
      method: "GET",
    };

    const response = await api.get("/trips", config);
    return response.data;
  });

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center">
        {trips?.map((item, index) => (
          <Link to={`/tour/` + item.id} className="link">
            <Card className="card-trip">
              <Card.Body>
                <div className="quota">
                  <b>
                    {item.quotaLeft} / {item.quota}
                  </b>
                </div>
                <Image className="img-trip mb-3" src={item.image[0]} />
                <h4 className="card-title">{item.title}</h4>
                <h5 className="price">
                  <b>{convertRupiah.convert(item.price)}</b>
                </h5>
                <h5 className="country">{item.country.name}</h5>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
      <div className="mb-10"></div>
    </>
  );
};

export default ListTour;
