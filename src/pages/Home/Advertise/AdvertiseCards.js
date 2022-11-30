import React from 'react';

const AdvertiseCards = ({car}) => {
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
              <span>Seller: {seller}</span>
              </div>
              <p className="text-xs">{date}</p>
            </div>
            <label  htmlFor="booking-modal" className="btn btn-primary btn-outline capitalize w-24 md:w-32 lg:w-42">
            Add to cart
            </label>
          </div>
        </div>
      </div>
    );
};

export default AdvertiseCards;