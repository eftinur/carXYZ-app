import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const CarsCard = ({car}) => {
    const { user } = useContext(AuthContext);
    const { name, image, location, date, original, resale, usedFor} = car;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      {/* <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        <p>Showroom price: ${original}</p>
        <p>Resale price: ${resale}</p>
        <p>Years of use: {usedFor}</p>
        <p>Seller: {user?.displayName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div> */}
    </div>
  );
};

export default CarsCard;
