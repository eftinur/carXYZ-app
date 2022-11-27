import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";


const DashLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addacar'>Add a car</Link>
            </li>
            <li>
                <Link to='/dashboard/allsellers'>All sellers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
