import React from "react";

const AddACar = () => {
  return (
    <div className="w-2/4">
      <h3 className="text-3xl">Add new car</h3>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Car Name:</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your car name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Car price:</span>
          </label>
          <input
            name="price"
            type="text"
            placeholder="Enter your car price"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number:</span>
          </label>
          <input
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Location:</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Enter your location"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Year of purchase:</span>
          </label>
          <input
            name="year"
            type="text"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Car condition:</span>
          </label>
          <select name="condition" className="select select-bordered w-full">
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text">Car category:</span>
          </label>
          <select name="condition" className="select select-bordered w-full">
            <option>Toyota</option>
            <option>Porsche</option>
            <option>Honda</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Car description</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddACar;
