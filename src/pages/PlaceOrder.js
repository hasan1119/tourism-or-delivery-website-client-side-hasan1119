import React, { useState, useEffect } from "react";
import NormalHeader from "../components/NormalHeader.js";
import { useHistory, useParams } from "react-router";
import Footer from "../components/Footer.js";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";

const ServiceDetails = () => {
  const { allAuthInfo } = useAuth();
  const { user } = allAuthInfo;
  const { displayName, email, photoURL } = user;
  const [service, setService] = useState({});
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://afternoon-citadel-33920.herokuapp.com/sigleservice/${id}`)
      .then((res) => {
        const gotService = res.data;
        setService(gotService);
      });
  }, [id]);

  const { img, title, ratings, totalReview, desc, price } = service;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, email, address, phone, profile } = data;
    const ordered = {
      title,
      desc,
      price,
      img,
      ratings,
      totalReview,
      name,
      email,
      address,
      phone,
      profile,
      status: "Pending",
    };

    axios
      .post("https://afternoon-citadel-33920.herokuapp.com/book", ordered)
      .then((res) => {
        const response = res.data;
        if (response) {
          alert("Successfully booked this room!");
          history.push("/myorders");
        } else {
          alert("something went wrong!!");
        }
      });
  };

  return (
    <>
      <NormalHeader />

      <div
        style={{
          minHeight: "80vh",
          backgroundAttachment: "fixed",
          marginTop: "100px",
        }}
        className="pb-2"
      >
        <h1 className="text-center booking-title text-dark mb-5">
          Let's Book This Room
        </h1>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-4 col-12 p-2 overflow-hidden">
                <img
                  className="hotel-image"
                  style={{
                    maxHeight: "600px",
                    objectFit: "fill",
                  }}
                  src={img}
                  alt=""
                />
              </div>
              <div className="col-lg-8 col-12">
                <div className="p-2">
                  <h2>{title}</h2>
                  <p className="m-0">{desc}</p>
                  <h4 className="mb-3 mt-2">Price:{price}$</h4>
                  <div>
                    <form
                      className="d-block w-100"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <label className="d-block mb-4" htmlFor="name">
                        <h6>Your Name</h6>
                        <input
                          required
                          defaultValue={displayName}
                          className="form-control w-100 d-block"
                          id="name"
                          placeholder="Your Name"
                          {...register("name")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="price">
                        <h6>
                          Your Email -
                          <span className="text-danger">
                            <small>Can't be changed</small>
                          </span>
                        </h6>
                        <input
                          required
                          readOnly
                          type="text"
                          defaultValue={email}
                          className="form-control w-100 d-block"
                          id="email"
                          placeholder="Your Email"
                          {...register("email")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="address">
                        <h6>Your Address</h6>
                        <input
                          required
                          type="address"
                          className="form-control w-100 d-block"
                          id="address"
                          placeholder="Your address"
                          {...register("address")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="phone">
                        <h6>Your Phone Number</h6>
                        <input
                          required
                          type="phone"
                          className="form-control w-100 d-block"
                          id="phone"
                          placeholder="Your phone number"
                          {...register("phone")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="photo">
                        <h6>Your profile Photo url</h6>
                        <input
                          defaultValue={photoURL}
                          className="form-control w-100 d-block"
                          id="photo"
                          placeholder="Your profile"
                          {...register("profile")}
                        />
                      </label>

                      <input
                        required
                        value="Place Order now"
                        className="btn mb-3 btn-primary border-0 rounded-0 w-100 d-block"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ServiceDetails;
