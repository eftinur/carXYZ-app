import React from "react";
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="item">
        <div className="loader-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
