import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const CategoryCards = () => {
    const category = useLoaderData();
    console.log(category);

    const url = `http://localhost:5000/cars?category=${category.category}`
    const {data: cars =[]} = useQuery({
        queryKey: ["cars", category?.category],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(cars);
    return (
        <div className='grid grid-cols-3 gap-6 container mx-auto my-20'>
            {
                cars.map(car => <Cards key={car._id} car={car}></Cards>)
            }
        </div>
    );
};

export default CategoryCards;