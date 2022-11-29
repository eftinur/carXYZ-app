import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllSellers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?type=seller", {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(data);

  if(isLoading) {
    return <div className="text-center">Loading...</div>
  }
  return (
    <div>
      <h3 className="text-3xl">All Sellers:</h3>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Warning</th>
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
                  <button className="btn btn-xs btn-error">Warning</button>
                </th>
                <th>
                  <button className="btn btn-xs btn-warning">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
