import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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
          <button key={category._id} className="btn mx-8"><Link to={`/categories/${category.category}`}>{category.category}</Link></button>
        ))}
      </div>
      <div>
      </div>
    </section>
  );
};

export default Categories;
