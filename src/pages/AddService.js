import React from "react";
import Footer from "../components/Footer.js";
import Header from "../components/NormalHeader.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";

const AddService = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.rating = 0;
    data.totalReview = 0;
    axios
      .post("https://afternoon-citadel-33920.herokuapp.com/addService", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added a new service!");
          history.push("/home");
        } else {
          alert("something went wrong!!Try again");
        }
      });
    reset();
  };
  return (
    <>
      <Header></Header>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ maxWidth: "700px" }} className="mt-5 w-100 mx-auto">
          <h1 className="text-center w-100 mb-3">Add a new service</h1>
          <div className="">
            <form className="d-block  w-100" onSubmit={handleSubmit(onSubmit)}>
              <label className="d-block mb-4" htmlFor="title">
                <h6>Your brief service title</h6>
                <input
                  required
                  className="form-control w-100 d-block"
                  id="title"
                  placeholder="Service title here"
                  {...register("title")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="price">
                <h6>Select a reasonable price for Service</h6>
                <input
                  required
                  type="number"
                  className="form-control w-100 d-block"
                  id="price"
                  placeholder="Select a reasonable price for"
                  {...register("price")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="img">
                <h6>Provide a service image URL</h6>
                <input
                  required
                  type="img"
                  className="form-control w-100 d-block"
                  id="photo"
                  placeholder="Your service image url"
                  {...register("img")}
                />
              </label>

              <label className="d-block mb-4" htmlFor="desc">
                <h6>Your Brief service description</h6>
                <textarea
                  className="form-control w-100 d-block"
                  id="desc"
                  placeholder="Service description here"
                  {...register("desc")}
                ></textarea>
              </label>

              <input
                required
                className="btn mb-3 btn-primary border-0 rounded-0 w-100 d-block"
                type="submit"
                value="Add Now"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddService;
