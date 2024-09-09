// components/Sidebar.js
import { FiHome, FiBarChart2, FiUser } from 'react-icons/fi';
import { FaRunning } from "react-icons/fa";

const Sidebar = () => (
  <div className="w-64 absolute bg-[#1F1F23] shadow-md ">
    <div className="p-6">
      <h1 className="text-2xl text-brown font-mono font-semibold">FitFlow</h1>
      <nav className="mt-10">
        <a href="#" className="flex items-center p-2 my-6 text-gray-600 hover:text-gray-800">
          <FiHome className="w-5 h-5" />
          <span className="mx-4 text-brown font-mono font-medium">Dashboard</span>
        </a>
        <a href="#workout" className="flex items-center p-2 my-6 text-gray-600 hover:text-gray-800">
        <FaRunning  className="w-5 h-5" />
          <span className="mx-4 text-brown font-mono font-medium">Workouts</span>
        </a>
        <a href="#profile" className="flex items-center p-2 my-6 text-gray-600 hover:text-gray-800">
          <FiUser className="w-5 h-5" />
          <span className="mx-4 text-brown font-mono font-medium">Profile</span>
        </a>
      </nav>
    </div>
  </div>
);

export default Sidebar;
