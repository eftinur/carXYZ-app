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

  return (
    <section className="container mx-auto my-28">
      <div className="flex justify-start flex-wrap">
        <h4>Pick Your category:</h4>
        {categories.map((category) => (
          <button key={category._id} className="btn btn-primary btn-outline mx-8"><Link to={`/categories/${category.category}`}>{category.category}</Link></button>
        ))}
      </div>
      <div>
      </div>
    </section>
  );
};

export default Categories;
