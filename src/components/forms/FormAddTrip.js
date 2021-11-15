import "./formAddTrip.css";
import { Button, Container } from "react-bootstrap";

import { useState } from "react";
import { useHistory } from "react-router";

import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";

const FormAddTrip = () => {
  let history = useHistory();
  let api = API();

  const [preview, setPreview] = useState();

  // Create variabel for store data with useState here ...
  const [form, setForm] = useState({
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    quotaLeft: "",
    description: "",
    image: "",
  });

  // Fetching category data
  const { data: countries } = useQuery("countriesCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };

    const response = await api.get("/countries", config);

    return response.data;
  });

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("countryId", form.countryId);
      formData.set("accomodation", form.accomodation);
      formData.set("transportation", form.transportation);
      formData.set("eat", form.eat);
      formData.set("day", form.day);
      formData.set("night", form.night);
      formData.set("dateTrip", form.dateTrip);
      formData.set("price", form.price);
      formData.set("quota", form.quota);
      formData.set("quotaLeft", form.quotaLeft);
      formData.set("description", form.description);

      for (let i = 0; i < form.image.length; i++) {
        formData.append("image", form.image[i]);
      }

      const config = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      };

      const response = await api.post("/trips", config);
      console.log(response);
      history.push("/trip");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Container>
        <div className="col-10" style={{ margin: "0 auto" }}>
          <div className="mt-5">
            <h3 className="form-label">Add Trip</h3>
            <div className="mt-5">
              <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Title Trip</b>
                  </label>
                  <input type="text" className="form-control" name="title" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Country</b>
                  </label>
                  <select className="form-select" name="countryId" onChange={handleChange}>
                    <option>Chose</option>
                    {countries?.map((item, index) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Accommodation</b>
                  </label>
                  <input type="text" className="form-control" name="accomodation" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Transportation</b>
                  </label>
                  <input type="text" className="form-control" name="transportation" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Eat</b>
                  </label>
                  <input type="text" className="form-control" name="eat" onChange={handleChange} />
                </div>
                <div className="mb-1">
                  <label className="form-label">
                    <b>Duration</b>
                  </label>
                </div>
                <div className="mb-3">
                  <input type="text" className="input-2" name="day" onChange={handleChange} />
                  <label className="form-label mar-5">
                    <b>Day</b>
                  </label>
                  <input type="text" className="input-2" name="night" onChange={handleChange} />
                  <label className="form-label">
                    <b>Night</b>
                  </label>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Date Trip</b>
                  </label>
                  <input type="date" className="form-control" name="dateTrip" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Price</b>
                  </label>
                  <input type="number" className="form-control" name="price" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Quota</b>
                  </label>
                  <input type="text" className="form-control" name="quota" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Remaining Quota</b>
                  </label>
                  <input type="text" className="form-control" name="quotaLeft" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Description</b>
                  </label>
                  <textarea className="form-control" name="description" onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Image</b>
                  </label>
                  <input type="file" className="form-control" name="image" multiple onChange={handleChange} />
                </div>
                {preview && (
                  <div>
                    <img
                      src={preview}
                      style={{
                        maxWidth: "150px",
                        maxHeight: "150px",
                        objectFit: "cover",
                      }}
                      alt="preview"
                    />
                  </div>
                )}
                <Button type="submit" variant="warning" className="mt-5 mb-10">
                  <b>Add New Trip</b>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
      </Container>
    </>
  );
};

export default FormAddTrip;
