import React, { Fragment, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
 const [isPasswordShow, setIsPasswordShow] = useState(false);

 return (
  <Fragment>
   <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-500 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
     <div className="text-center mb-6">
      <h1 className="font-bold text-2xl text-blue-600">Sign Up</h1>
      <p className="text-gray-600 text-sm">Create your account</p>
     </div>
     <form className="space-y-5">

      <div>
       <label className="block font-medium text-gray-700 mb-1">Name</label>
       <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <IoPersonCircleOutline className="text-blue-600 text-xl mr-2" />
        <input
         type="text"
         placeholder="Enter your name"
         className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
       </div>
      </div>


      <div>
       <label className="block font-medium text-gray-700 mb-1">Email</label>
       <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <MdEmail className="text-blue-600 text-xl mr-2" />
        <input
         type="email"
         placeholder="Enter your email"
         className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
       </div>
      </div>


      <div>
       <label className="block font-medium text-gray-700 mb-1">Password</label>
       <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <RiLockPasswordFill className="text-blue-600 text-xl mr-2" />
        <input
         type={isPasswordShow ? "text" : "password"}
         placeholder="Enter your password"
         className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
        <span
         onClick={() => setIsPasswordShow((prev) => !prev)}
         className="cursor-pointer ml-2"
        >
         {isPasswordShow ? (
          <FaRegEye className="text-gray-600" />
         ) : (
          <FaEyeSlash className="text-gray-600" />
         )}
        </span>
       </div>
      </div>


      <div>
       <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-yellow-500 transition-all duration-300 text-black font-semibold py-2 rounded-lg shadow-md"
       >
        Sign Up
       </button>
      </div>


      <div className="text-center">
       <p className="text-gray-600 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline font-medium">
         Login
        </Link>
       </p>
      </div>
     </form>
    </div>
   </div>
  </Fragment>
 );
};

export default SignUp;
