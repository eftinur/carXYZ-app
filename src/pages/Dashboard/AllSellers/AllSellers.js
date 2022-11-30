import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Spinner/Spinner";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users?type=seller");
      const data = await res.json();
      return data;
    },
  });
  console.log(data);

  const handleVerify = (usr) => {
    fetch(`http://localhost:5000/users/${usr._id}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
        toast.success('Verified Successfully');
        refetch();
      }
    })
  }

  
  const handleDelete = (usr) => {
    fetch(`http://localhost:5000/users/${usr._id}`, {
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

  if (isLoading) {
    return <Spinner></Spinner>;
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
                  <button onClick={() => handleVerify(usr)} className="btn btn-xs btn-error">Verify</button>
                </th>
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

export default AllSellers;
