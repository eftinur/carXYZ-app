import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((data) => {
      setCategories(data.data);
    });
  }, []);

  return (
    <section className="container mx-auto my-28">
      <div className="flex justify-start flex-wrap">
        <h4>Pick Your category:</h4>
        {categories.map((category) => (
          <button
            key={category._id}
            className="btn btn-primary btn-outline mx-8"
          >
            <Link to={`/categories/${category.category}`}>
              {category.category}
            </Link>
          </button>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Categories;
