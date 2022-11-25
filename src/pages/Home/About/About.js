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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus tempora sit unde ducimus labore, totam quisquam veniam deserunt, quo veritatis nesciunt molestias voluptatibus dignissimos adipisci pariatur voluptas deleniti repellat similique repudiandae iusto! Incidunt ipsa placeat soluta reprehenderit aliquid. Provident?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
