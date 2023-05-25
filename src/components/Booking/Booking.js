import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import BookingCard from "./BookingCard";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [bookings, setbookings] = useState([]);
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("cars-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setbookings(data);
        } else {
          navigate("/");
        }
      });
  }, []);

  const handledelete = (id) => {
    const procced = confirm("Are you sure you want to delete");
    if (procced) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const reamainbookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setbookings(reamainbookings);
        });
    }
  };

  const handleupdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: "confirm",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const reamainbookings = bookings.filter(
            (booking) => booking._id !== id
          );
          const updated = bookings.find((book) => book._id === id);
          updated.status = "confirm";

          const newbooking = [updated, ...reamainbookings];
          setbookings(newbooking);
          console.log(updated);
          console.log(newbooking);
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Bookings : {bookings.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingCard
                booking={booking}
                key={booking._id}
                handledelete={handledelete}
                handleupdate={handleupdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
