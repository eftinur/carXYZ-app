import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Spinner/Spinner";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://buro-autos-serv-eftinur.vercel.app/users?type=buyer");
      const data = await res.json();
      return data;
    },
  });
  console.log(data);

  const handleDelete = (usr) => {
    fetch(`https://buro-autos-serv-eftinur.vercel.app/users/${usr._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            refetch();
        }
      });
  };

  if(isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <h3 className="text-3xl">All Buyers:</h3>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full table-auto">
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((usr, i) => (
              <tr key={usr._id}>
                <th>{i + 1}</th>
                <th>{usr.name}</th>
                <th>{usr.email}</th>
                <th>
                  <button onClick={() => handleDelete(usr)} className="btn btn-xs btn-warning">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
