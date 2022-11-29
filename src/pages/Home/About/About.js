import React from "react";
import about__01 from '../../../assets/about__01.jpg';
import about__02 from '../../../assets/about__02.jpg';
import './About.css';

const About = () => {
  return (
    <div className="sm:container md:container lg:container mx-auto my-16 md:flex justify-between gap-10">
      <div className="w-3/4 mx-auto md:w-2/4 flex justify-start">
        <img className="shadow-2xl w-3/4" src={about__01} alt="" />
      </div>
      <div className="about-brief w-3/4 mx-auto md:w-2/4 mt-4">
        <div className="hidden lg:block">
            <img className="shadow-2xl w-full" src={about__02} alt="" />
        </div>
        <div className="">
            <h3>About us</h3>
            <p>Car Carriage is owned by OzCar Connect Pty Ltd. Our website www.Car Carriage advertises private vehicles and vehicles owned by OzCar PTY LTD which is a licensed motor dealer. OzCar LMCT 11839. Private vehicles listed for sale on this website are not part of and are not guaranteed by OzCar PTY LTD, they are listed for sale by a private 3rd party. *All Finance Subject to Approved Purchasers. ^^Terms and conditions apply. All sales and promotions are excluded from Muswellbrook Dealership.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
