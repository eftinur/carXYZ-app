import React from "react";

const AllBuyers = () => {
  return (
    <div>
      <h3 className="text-3xl">All Buyers:</h3>

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

export default AllBuyers;
