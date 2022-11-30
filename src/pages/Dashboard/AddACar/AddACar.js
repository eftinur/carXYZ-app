import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";

const AddACar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();

    const carName = e.target.name.value;
    const showroomPrice = e.target.showroomPrice.value;
    const resalePrice = e.target.resalePrice.value;
    const phone = e.target.phone.value;
    const location = e.target.location.value;
    const year = e.target.year.value;
    const carUsed = e.target.carUsed.value;
    const image = e.target.image.files[0];
    const condition = e.target.condition.value;
    const category = e.target.category.value.toLowerCase();
    const description = e.target.description.value;
    const date =format(new Date(),'PPpp');
    const status = 'unsold';

    console.log(
      carName,
      phone,
      location,
      year,
      condition,
      category,
      description, 
      date
    );

    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);

    // storing images on cloud
    const imageHostKey = process.env.REACT_APP_imageHostKey;
    console.log(imageHostKey);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        const carData = {
          category: category,
          seller: user.displayName,
          email: user.email,
          name: carName,
          image: imageData.data.display_url,
          showroomPrice: showroomPrice,
          resalePrice: resalePrice,
          phone: phone,
          year: year,
          carUsed: carUsed,
          location: location,
          condition: condition,
          date: date,
          description: description,
          status: status
        };

        fetch("http://localhost:5000/cars", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(carData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged) {
              toast.success('Product added successfully')
            }
          });
      });
  };
  return (
    <div className="w-2/4">
      <h3 className="text-3xl">Add new car</h3>
      <form onSubmit={handleSubmit}>
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
            <span className="label-text">Showroom price:</span>
          </label>
          <input
            name="showroomPrice"
            type="text"
            placeholder="Enter your car price"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Resale price:</span>
          </label>
          <input
            name="resalePrice"
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
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Car used</span>
          </label>
          <input
            name="carUsed"
            type="number"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-2">
          <label htmlFor="image" className="block mb-2 text-sm">
            Select Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="input input-bordered pt-2"
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
          <select name="category" className="select select-bordered w-full">
            <option>Toyota</option>
            <option>Porsche</option>
            <option>Honda</option>
          </select>
        </div>
        
        {/* <div className="form-control">
          <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate }
          ></DayPicker>
        </div> */}

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
        <button className="btn btn-primary btn-outline mt-6">Submit</button>
      </form>
    </div>
  );
};

export default AddACar;
