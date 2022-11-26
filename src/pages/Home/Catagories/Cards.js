import React from "react";
import "./Cards.css";

const Cards = ({ car, setCar }) => {
  const {
    name,
    image,
    resalePrice,
    showroomPrice,
    location,
    date,
    carUsed,
    seller,
  } = car;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-green-700">
          Resale: <span className="text-2xl">${resalePrice}</span>
        </p>
        <p>
          Showroom: <span className="text-2xl">${showroomPrice}</span>
        </p>
        <p className="text-bold">Location: {location}</p>
        <p>Used: {carUsed} years</p>
        <div className="seller__info mt-4">
          <div>
            <p>Seller: {seller}</p>
            <p className="text-xs">{date}</p>
          </div>
          <label onClick={ () => setCar(car)} htmlFor="booking-modal" className="btn btn-primary btn-outline capitalize">
          Add to cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Cards;
