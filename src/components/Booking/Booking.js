import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import BookingCard from "./BookingCard";

const Booking = () => {
  const [bookings, setbookings] = useState([]);
  const { user } = useContext(Authcontext);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setbookings(data));
  }, []);

  const handledelete = (id) => {
    const procced = confirm("Are you sure you want to delete");
    if (procced) {
      fetch("", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reamainbookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setbookings(reamainbookings);
        });
    }
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
