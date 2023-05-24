import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Checkout = () => {
  const { title, price, service_id, img } = useLoaderData();
  const { user } = useContext(Authcontext);
  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const email = form.email.value;
    const servicesdata = {
      email,
      title,
      price,
      img,
      service_id,
      date,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servicesdata),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4">
        services : {title}
      </h2>

      <form onSubmit={handlesubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              placeholder="email"
              name="email"
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue={title}
              placeholder="password"
              name="title"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="password"
              name="price"
              readOnly
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              required
              placeholder="date"
              name="date"
              className="input input-bordered"
            />
          </div>
        </div>
        <button
          className="btn btn-block my-5 bg-[#FF3811] text-white"
          type="submit"
        >
          place order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
