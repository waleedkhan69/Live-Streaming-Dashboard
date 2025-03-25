import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AddSubAdmin from "./AddSubAdmin";

const AdminSettings = () => {
 const navigate = useNavigate();
 const [showAddmin, setShowAddmin] = useState(false)
 const handleShowAddSubAdmin = () => {
  setShowAddmin(true)
 }
 const handleLogout = () => {
  console.log("User Logged Out");
  navigate("/login");
 };

 const settings = [
  { path: "/admin-profile", label: "Admin Profile", icon: <CgProfile className="text-blue-400" /> },
  { label: "Add Subadmin", action: handleShowAddSubAdmin, icon: <MdOutlineAdminPanelSettings className="text-blue-400" /> },
  { label: "Logout", icon: <IoIosLogOut className="text-blue-400" />, action: handleLogout }
 ];

 return (
  <div className="flex flex-col gap-4 mt-7 ml-2">
   {settings.map((setting, index) => (
    <div key={index} className="flex items-center gap-3 text-white cursor-pointer">
     {setting.icon}
     {setting.path ? (
      <Link to={setting.path} className="text-md font-medium">
       {setting.label}
      </Link>
     ) : (
      <span className="text-md font-medium" onClick={setting.action}>
       {setting.label}
      </span>
     )}
    </div>
   ))}
   {showAddmin && <AddSubAdmin onCancel={() => setShowAddmin(false)} />}
  </div>
 );
};

export default AdminSettings;
