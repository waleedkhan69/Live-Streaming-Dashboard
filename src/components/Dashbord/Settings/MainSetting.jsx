import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { FaUser, FaPlus, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const MainSetting = () => {
 const [show, setShow] = useState(true);
 const [AddSubAdmin, setAddSubAdmin] = useState(false);

 const handleAddSubAdmin = () => {
  setAddSubAdmin(!AddSubAdmin);

 };

 return (
  <Fragment>

   {show && (
    <div className="w-[16%] z-50 rounded-2xl h-[30vh] bg-gray-200 bottom-9 absolute left-48 shadow-lg p-4">

     <div className="flex justify-end">
      <button
       onClick={() => setShow(!show)}
       className="text-gray-600 hover:text-gray-900"
      >
       <FaTimes className="text-xl" />
      </button>
     </div>


     <ul className="mt-4 ">
      <li>
       <Link
        to="/admin-profile"
        className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded"
       >
        <FaUser className="text-gray-700" />
        <span>Admin Profile</span>
       </Link>
      </li>
      <li>
       <button
        onClick={handleAddSubAdmin}
        className="w-full flex items-center gap-2 p-2 hover:bg-gray-300 rounded"
       >
        <FaPlus className="text-gray-700" />
        <span>Add SubAdmin</span>
       </button>
      </li>
      <li>
       <Link
        to="/logout"
        className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded"
       >
        <FaSignOutAlt className="text-gray-700" />
        <span>Logout</span>
       </Link>
      </li>
     </ul>
    </div>
   )}


   {AddSubAdmin && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h1 className="text-xl font-bold mb-4">Add SubAdmin</h1>
      <form className="space-y-4">
       <input
        type="email"
        placeholder="Enter Email"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
       />
       <div className="flex justify-end gap-2">
        <button
         type="button"
         onClick={handleAddSubAdmin}
         className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
         Cancel
        </button>
        <button
         type="submit"
         className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded"
        >
         Add
        </button>
       </div>
      </form>
     </div>
    </div>
   )}
  </Fragment>
 );
};

export default MainSetting;