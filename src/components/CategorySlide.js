import React from "react";
// import CarouselCard from "./CarouselCard";
import { Link } from "react-router-dom";

const CategorySlide = () => {
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item hover:opacity-70 hover:cursor-pointer mx-4">
        <Link to={`/category/Education`}>
          <img
            src="https://i.ibb.co/crwL7mG/Education.jpg"
            alt="Pizza"
            className="rounded-xl shadow-md"
          />
        </Link>
      </div>
      <div className="carousel-item hover:opacity-70 hover:cursor-pointer mx-4">
        <Link to={`/category/TextBook`}>
          <img
            src="https://i.ibb.co/hBqZ1CK/textBook.jpg"
            alt="Pizza"
            className="rounded-xl shadow-md"
          />
        </Link>
      </div>
      <div className="carousel-item hover:opacity-70 hover:cursor-pointer mx-4">
        <Link to={`/category/Story`}>
          <img
            src="https://i.ibb.co/kDYGp5W/Story.jpg"
            alt="Pizza"
            className="rounded-xl shadow-md"
          />
        </Link>
      </div>
      <div className="carousel-item hover:opacity-70 hover:cursor-pointer mx-4">
        <Link to={`/category/Novel`}>
          <img
            src="https://i.ibb.co/gRffJNx/novel.jpg"
            alt="Pizza"
            className="rounded-xl shadow-md"
          />
        </Link>
      </div>
      <div className="carousel-item hover:opacity-70 hover:cursor-pointer mx-4">
        <Link to={`/category/Literature`}>
          <img
            src="https://i.ibb.co/Wf98nhv/literature.jpg"
            alt="Pizza"
            className="rounded-xl shadow-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategorySlide;
