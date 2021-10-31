import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.js";
import Header from "../components/NormalHeader.js";
// import Service from "../components/Service.js";
import axios from "axios";
import useAuth from "../hooks/useAuth.js";

const MyOrders = () => {
  const { allAuthInfo } = useAuth();
  const { user } = allAuthInfo;
  const { email } = user;
  const [myOrders, setMyOrders] = useState();

  useEffect(() => {
    axios
      .get(`https://afternoon-citadel-33920.herokuapp.com/myorders/${email}`)
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [email]);

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

  return (
    <>
      <div
        className="bg-dark"
        style={{
          minHeight: "100vh",
          color: "white !important",
        }}
      >
        <Header></Header>
        <div className="mt-5 pt-5">
          <h1 className="text-center text-white mb-3">My Orders</h1>
          <div style={{ width: "100vw", overflow: "auto" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Buyer</th>
                  <th scope="col">Cancellation</th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((service) => {
                  const { _id, name, title, price, status } = service;
                  return (
                    <tr>
                      <td className="td">{title}</td>
                      <td className="td">{price}</td>
                      <td className="text-primary">{status}</td>
                      <td className="td">{name}</td>
                      <td className="td">
                        <button
                          onClick={() => cancel(_id)}
                          className="btn btn-danger"
                        >
                          Cancel
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
