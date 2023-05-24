import React from "react";

const BookingCard = ({ booking, handledelete }) => {
  const { img, date, email, price, _id } = booking;

  return (
    <tr>
      <th>
        <button className="btn btn-circle" onClick={() => handledelete(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className=" w-24 h-24 rounded-sm">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">pending</button>
      </th>
    </tr>
  );
};

export default BookingCard;
