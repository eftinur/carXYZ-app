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
    <section className="w-3/4 mx-auto my-28">
      <h4>Pick Your category:</h4>
      <div className="flex justify-start flex-wrap py-4">
        {categories.map((category) => (
          <button
            key={category._id}
            className="btn btn-primary btn-outline m-5"
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
