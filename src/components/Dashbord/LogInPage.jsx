import React, { useState, Fragment } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {
 const [isPasswordShow, setIsPasswordShow] = useState(false);

 return (
  <Fragment>
   <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-700 to-blue-500 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
     <div className="text-center mb-6">
      <h1 className="font-bold text-2xl text-blue-600">Welcome Back</h1>
      <p className="text-sm text-gray-600">Please enter your details</p>
     </div>

     <form>
      {/* Email */}
      <div className="mb-4">
       <label className="block font-medium text-gray-700 mb-1">Email Address</label>
       <input
        type="email"
        placeholder="Please enter your email"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-800 placeholder-gray-400"
       />
      </div>

      {/* Password */}
      <div className="mb-4">
       <label className="block font-medium text-gray-700 mb-1">Password</label>
       <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <input
         type={isPasswordShow ? "text" : "password"}
         placeholder="Please enter your password"
         className="w-full outline-none text-gray-800 placeholder-gray-400"
        />
        <span
         onClick={() => setIsPasswordShow(!isPasswordShow)}
         className="ml-2 cursor-pointer"
        >
         {isPasswordShow ? (
          <FaEyeSlash className="text-gray-600" />
         ) : (
          <FaEye className="text-gray-600" />
         )}
        </span>
       </div>
      </div>

      {/* Remember me & Forgot password */}
      <div className="flex justify-between items-center mb-5 text-sm">
       <div className="flex items-center gap-2">
        <input type="checkbox" className="cursor-pointer" />
        <p className="text-gray-600">Remember me</p>
       </div>
       <p className="text-blue-600 hover:underline cursor-pointer">Forgot Password?</p>
      </div>


      <button
       type="submit"
       className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md"
      >
       Sign In
      </button>
     </form>
    </div>
   </div>
  </Fragment>
 );
};

export default LogInPage;
