import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData().data;
  const {
    authorName,
    bookName,
    condition,
    details,
    edition,
    img,
    location,
    number,
    price,
    seller,
  } = book;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-full mx-auto mt-10 w-full m-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            className="rounded-lg object-cover w-full"
            src={img}
            alt="Joykoly JU C unite Question Bank"
          />
        </div>
        <div className="">
          <div className=" md:pl-6 mt-4 md:mt-0 ">
            <h2 className="text-xl font-bold">{bookName}</h2>
            <p className="text-sm text-gray-600">
              By: <i>{authorName}</i>
            </p>
            <div className="mt-4">
              <p>
                <span className="font-semibold">Posted By:</span> {seller}
              </p>
              <p>
                <span className="font-semibold">Pickup Address:</span>
                {location.area} , {location.locationDetails}
              </p>
              <p>
                <span className="font-semibold">Condition:</span> {condition}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-red-500 font-bold">৳{price}</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Contact Information</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mr-2">
                Click to see number
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">
                Send Mail
              </button>
              <hr className="my-5" />
              <div className="mt-4">
                <p>{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
