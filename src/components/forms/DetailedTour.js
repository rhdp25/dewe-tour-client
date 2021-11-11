import "./detailedTour.css";
import { Button, Container, Form, Image } from "react-bootstrap";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";

import iconHotel from "../../assets/icons/hotel.png";
import iconPlane from "../../assets/icons/plane.png";
import iconMeal from "../../assets/icons/meal.png";
import iconTime from "../../assets/icons/time.png";
import iconCalendar from "../../assets/icons/calendar.png";

import convertRupiah from "rupiah-format";

import { useMutation } from "react-query";
import { API } from "../../config/api";

const DetailedTour = ({ item }) => {
  let api = API();
  let history = useHistory();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count <= 1 ? count : count - 1);
  };

  const [state] = useContext(UserContext);

  let totalCount = item.price * count;
  let status = "Waiting Payment";
  let attachment = "";

  const handleBuy = useMutation(async () => {
    try {
      const data = {
        counterQty: count,
        total: item.price * count,
        status: status,
        attachment: attachment,
        tripId: item.id,
        userId: state.user.id,
        country: item.country.name,
      };

      console.log(data);

      // Data body
      const body = JSON.stringify(data);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      await api.post("/transaction", config);

      history.push("/payment");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Container>
        <h1 className="mt-5">
          <b>{item.title}</b>
        </h1>
        <h5 className="mb-3 mt-2">{item.country.name}</h5>
        <Image src={item.image[0]} className="image-head" />
        <div className="d-flex justify-content-between mt-4 mb-10">
          <Image src={item.image[1]} />
          <Image src={item.image[2]} />
          <Image src={item.image[3]} />
        </div>
        <h4 className="mt-5 mb-4">
          <b>Information Trip</b>
        </h4>
        <div className="info-trip mt-4">
          <div className="info-item">
            <h6>Accommodation</h6>
            <div className="item-2">
              <img className="icon-info" src={iconHotel} alt="img" />
              <h5 className="title-info">
                <b>{item.accomodation}</b>
              </h5>
            </div>
          </div>
          <div className="info-item">
            <h6>Transportation</h6>
            <div className="item-2">
              <img className="icon-info" src={iconPlane} alt="img" />
              <h5 className="title-info">
                <b>{item.transportation}</b>
              </h5>
            </div>
          </div>
          <div className="info-item">
            <h6>Eat</h6>
            <div className="item-2">
              <img className="icon-info" src={iconMeal} alt="img" />
              <h5 className="title-info">
                <b>{item.eat}</b>
              </h5>
            </div>
          </div>
          <div className="info-item">
            <h6>Duration</h6>
            <div className="item-2">
              <img className="icon-info" src={iconTime} alt="img" />
              <h5 className="title-info">
                <b>{item.day}</b>
              </h5>
            </div>
          </div>
          <div className="info-item">
            <h6>Date Trip</h6>
            <div className="item-2">
              <img className="icon-info" src={iconCalendar} alt="img" />
              <h5 className="title-info">
                <b>{item.dateTrip}</b>
              </h5>
            </div>
          </div>
        </div>
        <h5 className="mt-5 mb-3">
          <b>Description</b>
        </h5>
        <p className="mb-5">{item.description}</p>
        <div className="mb-20">
          <div className="price-1 mt-2">
            <h3>
              <b>{convertRupiah.convert(item.price)} / Person</b>
            </h3>
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="warning" onClick={decrement}>
              <b> - </b>
            </Button>
            <Form.Control className="qty" type="text" value={count} readOnly />
            <Button variant="warning" onClick={increment}>
              <b>+</b>
            </Button>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h3>
              <b>Total :</b>
            </h3>
            <h3>
              <b className="text-danger">{convertRupiah.convert(totalCount)}</b>
            </h3>
          </div>
          <hr />
          <div className="d-flex justify-content-end mt-4">
            {!state.isLogin ? (
              <Button variant="warning">
                <b>PLEASE LOGIN</b>
              </Button>
            ) : (
              <Button variant="warning" onClick={() => handleBuy.mutate()}>
                <b>BOOK NOW</b>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DetailedTour;