import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ car }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name =  form.name.value;
    const email = form.email.value;
    const carName = form.carName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(name, email, carName, price, phone, location);
    
    toast.success('Order booked successfully')
  }

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                defaultValue={user?.displayName}
                readOnly
                name="name"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                defaultValue={user?.email}
                readOnly
                name="email"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Model Name:</span>
              </label>
              <input
                defaultValue={car?.name}
                readOnly
                name="carName"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={car?.resalePrice}
                readOnly
                name="price"
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone no.</span>
                </label>
                <input
                  name="phone"
                  type="number"
                  placeholder="Enter your cell phone no."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meeting location:</span>
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter your location"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="modal-action">              
            <button className="btn btn-primary btn-outline capitalize">Buy now</button>
            <label
              htmlFor="booking-modal"
              className="btn btn-primary btn-outline capitalize"
            >
              Close
            </label>
          </div>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default BookingModal;
