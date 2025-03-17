import React from "react";
import { FaUsers, FaChartLine, FaLightbulb, FaGift, FaStore, FaHeart, FaComment } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
 const navItems = [
  { path: "/all-users", label: "Get All Users", icon: <FaUsers className="group-hover:text-blue-600" /> },
  { path: "/real-time-analytics", label: "Real Time Analytics", icon: <FaChartLine className="group-hover:text-green-400" /> },
  { path: "/creator-insight", label: "Creator Insight", icon: <FaLightbulb className="group-hover:text-yellow-400" /> },
  { path: "/create-gift", label: "Create Gift", icon: <FaGift className="group-hover:text-pink-400" /> },
  { path: "/gift-store", label: "Gift Store", icon: <FaStore className="group-hover:text-purple-500" /> },
  { path: "/active-user", label: "Likes", icon: <FaHeart className="group-hover:text-red-600" /> },
  { path: "/active-user", label: "Comment", icon: <FaComment className="group-hover:text-teal-400" /> },
  { path: "/media-controls", label: "Media controles", icon: <FaComment className="group-hover:text-teal-400" /> },
 ];


 return (
  <div className=" h-[96vh]  text-sm bg-gray-800 border-r  overflow-auto w-full shadow-md py-6 px-4 pb-2 transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400" style={{ scrollbarWidth: "none" }}>
   <h1 className="text-white font-semibold text-2xl">Admin Dashboard</h1>
   <div className="flex flex-col mt-7 justify-evenly gap-8 items-start">
    {navItems.map((item, index) => (
     <div
      key={index}
      className={"flex items-start gap-3 group cursor-pointer  rounded-lg text-white"}
     >
      <div className="text-xl">
       {item.icon}
      </div>
      <Link to={item.path} className="text-md font-medium ">
       {item.label}
      </Link>
     </div>
    ))}
   </div>
  </div>
 );
};

export default SideBar;