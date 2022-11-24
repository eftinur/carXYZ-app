import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='w-3/4 mx-auto lg:w-2/4 lg:ml-36'>
                <h1>FIND A CAR NEAR <br /> YOU</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis necessitatibus eaque at possimus ab, adipisci alias molestias quisquam magnam aperiam iste enim nihil eos similique error voluptatum. Aperiam iusto autem esse porro!</p>
                <button className='btn btn-primary mt-8'><span className='text-white'>Explore more</span></button>
                <button className='btn btn-primary btn-outline mt-8 ml-4'><span className='text-white'>Register now</span></button>
            </div>
        </section>
    );
};

export default Banner;