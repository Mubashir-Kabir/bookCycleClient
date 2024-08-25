import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { img, authorName, bookName, details, condition, price, _id } = book;
  let bookDetails;
  if (details?.length > 50) {
    bookDetails = `${details.slice(0, 50)}. . .`;
  } else {
    bookDetails = details;
  }
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl ">
        <figure className="h-4/6">
          <img className="w-full h-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body  p-2 text-center text-sm ">
          <h2 className="card-title">
            {bookName}
            <span className="indicator-item badge badge-primary">new</span>{" "}
          </h2>
          <p className="text-start">
            Author: <i>{authorName}</i>
          </p>
          {/* <p className="text-start">{bookDetails}</p> */}
          <div className="card-actions justify-around p-2">
            <div className="badge badge-outline">{condition}</div>
            <div className="badge badge-outline">{price}/=</div>
          </div>
          <Link to={`../book/${_id}`} className="btn btn-ghost ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
