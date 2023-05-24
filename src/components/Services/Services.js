import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setdata(data));
  });

  return (
    <div className="py-20">
      <div className="space-y-3 text-center">
        <h3 className="font-bold text-[#FF3811] capitalize">Service</h3>
        <p className="text-2xl font-bold">Our Service Area</p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((data) => (
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={data.service_id}
          >
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.price}</p>
              <div className="card-actions">
                <Link to={`/checkout/${data._id}`}>
                  <button className="btn btn-primary">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
