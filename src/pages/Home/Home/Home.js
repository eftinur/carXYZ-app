import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Catagories/Categories';

const Home = () => {
    return (
        <div>
          <Banner />
          <Categories />
          <About />
          <Advertise />
        </div>
    );
};

export default Home;