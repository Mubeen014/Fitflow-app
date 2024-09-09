"use client";

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Sidebar from "../Sidebar/page"; // Import the Sidebar component

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
    <header className="bg-cyan-900 shadow p-4">
      <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
      <CiMenuBurger
        size={32}
        onClick={toggleSidebar}
        className=" cursor-pointer"
      />
      <img src='./Images/logo.png' alt="Placeholder Image" className="h-20 w-20" />
    </div>
        <p className="text-2xl text-brown font-mono font-semibold"><img src='./Images/workoutgi.gif' alt="Placeholder Image" class=" h-20 w-20" /></p>
        <div className="flex items-center">
          <img
            src="/user-profile.jpg"
            alt="Profile"
            id="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      
    </header>
    {isSidebarVisible && <Sidebar />} {/* Conditionally render Sidebar */}
    </div>
  );
};

export default Header;
