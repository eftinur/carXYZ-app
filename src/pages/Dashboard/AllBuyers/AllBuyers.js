import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?type=buyer");
      const data = await res.json();
      return data;
    },
  });
  console.log(data);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      refetch();
    })
  }
  return (
    <div>
      <h3 className="text-3xl">All Buyers:</h3>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
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
                  <button className="btn btn-xs btn-error">Verify</button>
                </th>
                <th>
                  <button onClick={() => handleDelete(usr._id)} className="btn btn-xs btn-warning">Delete</button>
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
