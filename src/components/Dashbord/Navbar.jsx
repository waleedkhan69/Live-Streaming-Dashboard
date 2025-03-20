import React, { Fragment } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
 return (
  <Fragment>
   <nav className="bg-[#16113A]  w-full px-8 p-4   items-center justify-between flex">
    <div>
     <p className="text-white font-semibold">Dashboard</p>
    </div>
    <div className="flex w-[25%] bg-white p-1 rounded-2xl  justify-center items-center ">
     <input type="search" className="outline-none  " placeholder="please search here " />
     <div><IoSearchOutline /></div>
    </div>

   </nav>
  </Fragment>
 )
}
export default Navbar