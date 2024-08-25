import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="grid md:grid-cols-5">
        <Sidebar></Sidebar>
        <div className="grid col-span-4">
          <Outlet></Outlet>
        </div>
      </div> */}
      <div className=" bg-white">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
