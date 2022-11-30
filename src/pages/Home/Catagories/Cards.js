import React, { useContext, useEffect, useState } from "react";
import "./Cards.css";
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from "../../../contexts/AuthProvider";

const Cards = ({ car, setCar }) => {
  const { user } = useContext(AuthContext);
  const [CurrentUser, setCurrentUser] = useState(null);
  useEffect( () => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCurrentUser(data);
    })
  }, [user?.email])
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
    <div className="card bg-base-100 shadow-xl mx-auto">
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
            <div className="seller__icon">
            <span>Seller: {seller}</span> {CurrentUser?.verfied ? <span className="text-blue-500"><FaCheck /></span> : <span></span>}
            </div>
            <p className="text-xs">{date}</p>
          </div>
          <label onClick={ () => setCar(car)} htmlFor="booking-modal" className="btn btn-primary btn-outline capitalize w-24 md:w-32 lg:w-42">
          Add to cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Cards;
