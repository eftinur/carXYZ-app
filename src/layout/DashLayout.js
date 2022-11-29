import React, { useContext } from "react";
import Header from "../pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/useBuyer";

const DashLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  console.log(isAdmin);
  console.log(isBuyer);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-4 px-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-700 text-base-content">
            {isBuyer && (
              <li>
                <Link to="/dashboard">My orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/addacar">Add a car</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
