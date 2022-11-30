import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Spinner/Spinner";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://buro-autos-serv-eftinur.vercel.app/carseller?email=${user?.email}`;
  const { data: cars = [], isLoading, refetch } = useQuery({
    queryKey: ["cars", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (car) => {
    fetch(`https://buro-autos-serv-eftinur.vercel.app/cars/${car._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            refetch();
        }
      });
  };

  const handleAdvertise = (car) => {
    const advertisedCar = car;
    fetch("https://buro-autos-serv-eftinur.vercel.app/advertise", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(advertisedCar),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged) {
              console.log(data);
              toast.success('Product advertise successful')
            }
          });

  }


  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      <h3 className="text-3xl">My products</h3>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Model Name</th>
              <th>Price</th>
              <th>Sales Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={car._id}>
                <th>{index + 1}</th>
                <th>{car.name}</th>
                <th>{car.resalePrice}</th>
                <th>{car.status}</th>
                <th>
                  <button onClick={() => handleAdvertise(car)} className="btn btn-xs btn-warning">Advertise</button>
                </th>
                <th>
                  <button onClick={() => handleDelete(car)} className="btn btn-xs btn-warning">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
