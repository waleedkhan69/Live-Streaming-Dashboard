import { Fragment, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateGift = () => {
 const [data, setData] = useState({
  type: "",
 });

 const [gifts, setGifts] = useState([]);
 const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleClick = (e) => {
  e.preventDefault();
  if (!data.type) {
   toast.error("Gift Type is required");
   return;
  }
  setGifts((prevGifts) => [...prevGifts, data.type]);
  toast.success("Gift Type Added Successfully!");
  setData({ type: "" });
 };
 const handleDelete = (index) => {
  const updatedGifts = gifts.filter((_, i) => i !== index);
  setGifts(updatedGifts);
  toast.info("Gift Type Deleted Successfully!");
 };
 return (
  <Fragment>
   <div className="overflow-y-scroll flex bg-gray-100 flex-col items-center justify-center p-4">
    <div className=" rounded-lg p-6 w-full">
     <h1 className="text-2xl font-bold text-center mb-4">Select Gift Type</h1>
     <form onSubmit={handleClick} className="flex justify-evenly">
      <select
       name="type"
       value={data.type}
       onChange={handleChange}
       className="block w-[20%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       <option value="">Select Type</option>
       <option value="Classic">Classic</option>
       <option value="Free">Free</option>
       <option value="Privilege">Privilege</option>
       <option value="Event">Event</option>
      </select>
      <button
       type="submit"
       className="w-[10%] bg-blue-500 cursor-pointer text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
       Create Now
      </button>
      <Link to={"/add-gift"} className="w-[40%]">
       <button className="bg-blue-700 w-full text-white py-2 rounded-md">
        New Store
       </button>
      </Link>
     </form>
    </div>
    <table className="mt-7 w-full border-collapse  border border-gray-300">
     <thead>
      <tr>
       <th className="border p-2">Gift Type</th>
       <th className="border p-2">Action</th>
      </tr>
     </thead>
     <tbody>
      {gifts.map((gift, index) => (
       <tr key={index} className="text-center">
        <td className="border p-2">{gift}</td>
        <td className="border p-2 flex justify-evenly gap-2">
         <button
          onClick={() => handleDelete(index)}
          className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
         >
          Delete
         </button>
         <button

          className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
         >
          Update
         </button>
        </td>

       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </Fragment>
 );
};

export default CreateGift;
