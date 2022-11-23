import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='w-2/4 mx-auto'>
                <h1>fiNd A CAR NEAR YOu</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis necessitatibus eaque at possimus ab, adipisci alias molestias quisquam magnam aperiam iste enim nihil eos similique error voluptatum. Aperiam iusto autem esse porro!</p>
                <button className='btn btn-primary mt-8 capitalize'>Learn more</button>
            </div>
        </section>
    );
};

export default Banner;