import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const carData = useLoaderData();
    console.log(carData);
    return (
        <div>
            Sup
        </div>
    );
};

export default CategoryDetails;