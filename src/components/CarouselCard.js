import React from "react";

const CarouselCard = () => {
  return (
    <div>
      <div className=" bg-base-100 shadow-xl">
        <figure className="">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl w-1/2"
          />
        </figure>
        <div className=" items-center text-center">
          <h2 className="">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
