import "./bookingForm.css";
import { Container, Image, Form, Modal, Button } from "react-bootstrap";

import logoDW from "../../assets/logo_dark.png";
import transferProof from "../../assets/images/uploadImage.png";

import { useState } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { API } from "../../config/api";

import convertRupiah from "rupiah-format";
import moment from "moment";

const BookingForm = ({ item }) => {
  let api = API();
  let history = useHistory();

  const [imgPreview, setImgPreview] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    attachment: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      setImgPreview(e.target.files);
    }
  };

  const updateTransaction = useMutation(async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("attachment", imgPreview[0]);
      formData.append("status", "Waiting Approve");

      const config = {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
        body: formData,
      };

      await api.patch("/transactions/" + item.id, config);
    } catch (error) {
      console.log(error);
    }
  });

  const updateQuota = useMutation(async (e) => {
    e.preventDefault();
    try {
      const quotas = {
        quotaLeft: item.trip.quotaLeft - item.counterQty,
      };

      console.log(quotas);

      const quotaLefts = JSON.stringify(quotas);

      const configs = {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          "Content-Type": "application/json",
        },
        body: quotaLefts,
      };

      const quotasNow = await api.patch("/trips/" + item.tripId, configs);
      console.log(quotasNow);
    } catch (error) {
      console.log(error);
    }
  });

  const handleSubmit = useMutation(async (e) => {
    e.preventDefault();
    try {
      updateTransaction.mutate(e);
      updateQuota.mutate(e);

      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  });

  let statusPay;
  if (item.status === "Waiting Payment") {
    statusPay = "badge-warning p-2 text-warning";
  } else if (item.status === "Waiting Approve") {
    statusPay = "badge-info p-2 text-primary";
  } else if (item.status === "Cancel") {
    statusPay = "badge-danger p-2 text-danger";
  } else {
    statusPay = "badge-success p-2 text-success";
  }

  return (
    <>
      <Container>
        <div className="card mt-5">
          <div className="card-body p-5">
            <div className="d-flex justify-content-between p-0 m-0">
              <Image src={logoDW} />
              <h4 className="card-title">Booking</h4>
            </div>
            <div className="d-flex justify-content-end p-0 m-0">
              <h6 className="card-text">
                <b>{moment(item.trip.dateTrip).format("DD MMMM YYYY")}</b>
              </h6>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="card-body p-0 m-0">
                <h4>
                  <b>{item.trip.title}</b>
                </h4>
                <p>{item.trip.country.name}</p>
                <span className={statusPay}>{item.status}</span>
              </div>
              <div className="card-body d-flex flex-column p-0 m-0">
                <h6>
                  <b>Date Trip</b>
                </h6>
                <p>{moment(item.trip.dateTrip).format("DD MMMM YYYY")}</p>
                <h6>
                  <b>Accommodation</b>
                </h6>
                <p>{item.trip.accomodation}</p>
              </div>
              <div className="card-body d-flex flex-column p-0 m-0">
                <h6>
                  <b>Duration</b>
                </h6>
                <p>
                  {item.trip.day} day {item.trip.night} night
                </p>
                <h6>
                  <b>Transportation</b>
                </h6>
                <p>{item.trip.transportation}</p>
              </div>
              <div className="card-body d-flex align-items-end flex-column p-0 m-0">
                <label htmlFor="files" className="pointerss">
                  {!imgPreview ? (
                    <div>
                      <Image className="transferProof" src={transferProof} />
                    </div>
                  ) : (
                    <div>
                      <Image className="transferProof" src={URL.createObjectURL(imgPreview[0])} />
                    </div>
                  )}
                  <br />
                </label>
                <p className="text-center">Upload payment proof</p>
                <input type="file" id="files" className="hidden" name="attachment" onChange={handleChange} />
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{item.user.fullName}</td>
                  <td>{item.user.gender}</td>
                  <td>{item.user.phone}</td>
                  <td>{item.user.address}</td>
                  <td>Qty</td>
                  <td>:</td>
                  <td>{item.counterQty}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>:</td>
                  <td className="text-red">{"  " + convertRupiah.convert(item.total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-end">
          <Button className="wd" variant="warning" onClick={handleShow}>
            <b>Pay</b>
          </Button>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="text-center">
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <input type="file" id="files" hidden name="attachment" onChange={handleChange} />
            <input type="text" className="hidden" name="status" value="Waiting Approve" />
            Your payment will be confirmed within 1 x 24 hours.
            <br />
            To see orders click
            <Button className="here" type="submit">
              Here
            </Button>
            thank you
          </Form>
        </Modal.Body>
      </Modal>
      <div className="mb-5"></div>
    </>
  );
};

export default BookingForm;
