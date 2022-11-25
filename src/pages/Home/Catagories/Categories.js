import React, { useEffect, useState } from "react";
import CarsCard from "./CarsCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      });
  }, []);
  console.log(cars);
  return (
    <section className="container mx-auto my-12">
      <div className="flex justify-start">
        <h4>Pick Your category:</h4>
        {categories.map((category) => (
          <button className="btn mx-8">{category.category}</button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 my-12">
        {cars.map((car) => (
          <CarsCard key={car._id} car={car}></CarsCard>
        ))}
      </div>
    </section>
  );
};

export default Categories;
