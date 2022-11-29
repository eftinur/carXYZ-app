import React from "react";
import errorImg from "../../assets/404 page.svg";

const ErrorPage = () => {
  return (
    <div className="error-page w-2/4 min-h-screen mx-auto text-center">
      <img src={errorImg} alt="" />
    </div>
  );
};

export default ErrorPage;
