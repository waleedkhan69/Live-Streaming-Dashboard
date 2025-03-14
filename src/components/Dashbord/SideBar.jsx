import React from "react";

import { Link, useLocation } from "react-router-dom";

const SideBar = () => {

 const navItems = [

  { path: "/all-users", label: "Get All Users" },
  { path: "/real-time-analytics", label: "Real Time Analytics" },
  { path: "/creator-insight", label: "Creator Insight" },
  { path: "/create-gift", label: "Create Gift" },
  { path: "/gift-store", label: "Gift Store" },
  { path: "/active-user", label: "Likes" },
  { path: "/active-user", label: "Comment" },

  ,
 ];

 return (
  <div className="h-[100vh]  text-sm bg-gray-800 border-r  overflow-auto w-full shadow-md py-6 p-4 pb-2 transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400">
   <h1 className="text-white font-bold text-2xl">Admin Dashboard</h1>
   <div className="flex flex-col justify-evenly gap-6 items-start">
    {navItems.map((item, index) => (
     <div
      key={index}
      className={"flex items-start gap-3 cursor-pointer  rounded-lg text-white"}
     >
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