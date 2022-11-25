import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Catagories/Categories';

const Home = () => {
    return (
        <div>
          <Banner />
          <Categories />
          <About />
        </div>
    );
};

export default Home;