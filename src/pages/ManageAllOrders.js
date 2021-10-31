import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.js";
import Header from "../components/NormalHeader.js";
// import Service from "../components/Service.js";
import axios from "axios";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [confirmed, setConfirmed] = useState(0);
  useEffect(() => {
    axios
      .get("https://afternoon-citadel-33920.herokuapp.com/orders")
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [confirmed]);

  function cancel(id) {
    const confirmation = window.confirm("Are you sure to delete!!");
    if (confirmation) {
      axios
        .delete(`https://afternoon-citadel-33920.herokuapp.com/deletion/${id}`)
        .then((res) => {
          if (res.data === 1) {
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
            alert("Delete Successfully!!");
          } else {
            alert("Something went wrong!!");
          }
        });
    }
  }
  function confirmation(id) {
    axios
      .patch(`https://afternoon-citadel-33920.herokuapp.com/confirmation/${id}`)
      .then((res) => {
        if (res.data === 1) {
          setConfirmed(res.data);
          alert("successfully confirmed the booking!!");
        } else {
          alert("Already confirmed!!");
        }
      });
  }
  return (
    <>
      <div className="bg-dark" style={{ minHeight: "100vh" }}>
        <Header></Header>
        <div className="mt-5 pt-5">
          <h1 className="text-center text-white mb-4">Manage All Orders</h1>
          <div style={{ width: "100vw", overflow: "auto" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Buyer</th>
                  <th scope="col">Phone</th>
                  <th scope="col-3">Email</th>
                  <th scope="col">Cancellation</th>
                  <th scope="col">Confirmation</th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((service) => {
                  const {
                    _id,
                    profile,
                    name,
                    email,
                    phone,
                    title,
                    price,
                    status,
                  } = service;
                  return (
                    <tr>
                      <td>{title}</td>
                      <td>{price}</td>
                      <td className="text-primary">{status}</td>
                      <td>
                        <img width="50px" src={profile} alt="" />
                        <p className="m-0 mt-2"> {name}</p>
                      </td>
                      <td>{phone}</td>
                      <td className="col-3">{email}</td>
                      <td>
                        <button
                          onClick={() => cancel(_id)}
                          className="btn btn-danger"
                        >
                          Cancel
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => confirmation(_id)}
                          className="btn btn-primary"
                        >
                          Confirm
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyOrders;
