import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllSellers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl">All users:</h3>

      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
