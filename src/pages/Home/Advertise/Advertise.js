import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertiseCards from "./AdvertiseCards";
import { AuthContext } from "../../../contexts/AuthProvider";
import './Advertise.css';

const Advertise = () => {
    const { user } = useContext(AuthContext);
  const url = `https://buro-autos-serv-eftinur.vercel.app/advertise?email=${user?.email}`;
  const { data } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(data);



  return (
    <div className="">
      {data?.length  ? (
        <>
          <h2 className="advertise__title text-3xl w-3/4 mx-auto">Advertised Cars</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto my-20">
            {data?.map((car) => (
              <AdvertiseCards key={car._id} car={car}></AdvertiseCards>
            ))}
          </div>
        </>
      )
    :
    <div className="hidden"></div>
    }
    </div>
  );
};

export default Advertise;
