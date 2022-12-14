import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../../Spinner/Spinner";
import BookingModal from "./BookingModal/BookingModal";
import Cards from "./Cards";

const CategoryCards = () => {
  const category = useLoaderData();
  const [car, setCar] = useState(null);


  const url = `https://buro-autos-serv-eftinur.vercel.app/cars?category=${category.category}`;
  const { data: cars = [], isLoading } = useQuery({
    queryKey: ["cars", category?.category],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto my-20">
        {cars.map((car) => (
          <Cards 
          key={car._id} 
          car={car}
          setCar={setCar}
          ></Cards>
        ))}
      </div>
      <BookingModal
      car={car}
      ></BookingModal>
    </div>
  );
};

export default CategoryCards;
