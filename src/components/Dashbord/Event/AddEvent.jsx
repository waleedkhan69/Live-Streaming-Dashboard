import { Fragment, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddEvent = () => {
 const [data, setData] = useState({
  file: null,
  name: "",

 });

 const [gifts, setGifts] = useState([]);

 const handleChange = (e) => {
  const { name, value, files } = e.target;
  setData((prev) => ({
   ...prev,
   [name]: files ? files[0] : value,
  }));
 };

 const handleClick = (e) => {
  e.preventDefault();

  if (!data.file || !data.name) {
   toast.error("All fields are required.");
   return;
  }

  if (!data.file.type.startsWith("image/")) {
   toast.error("Only image files are allowed.");
   return;
  }

  setGifts((prevGifts) => [...prevGifts, data]);
  toast.success("Event Created Successfully!");

  setData({ file: null, price: "", type: "" });
 };

 const handleDelete = (index) => {
  const updatedGifts = gifts.filter((_, i) => i !== index);
  setGifts(updatedGifts);
  toast.info("Gift Deleted Successfully!");
 };

 return (
  <Fragment>
   <div className="overflow-y-scroll h-[90vh] overflow-auto flex items-center flex-col justify-center p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
     <h1 className="text-2xl font-bold text-center mb-4">Create Event</h1>
     <form onSubmit={handleClick} className="space-y-4 ">
      <input
       type="file"
       accept="image/*"
       name="file"
       onChange={handleChange}
       className="block w-full p-2 border border-gray-300 rounded-md cursor-pointer"
      />

      <input
       type="text"
       name="name"
       value={data.name}
       onChange={handleChange}
       placeholder="Please Enter Event Name"
       className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />



      <button
       type="submit"
       className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
       Create Now
      </button>
     </form>



    </div>
    {gifts.length > 0 && (
     <table className="mt-7 w-full border-collapse border bg-gray-100 border-gray-300">
      <thead>
       <tr>
        <th className="border p-2">Image</th>
        <th className="border p-2">Event Name</th>

        <th className="border p-2">Action</th>
       </tr>
      </thead>
      <tbody>
       {gifts.map((gift, index) => (
        <tr key={index} className="text-center">
         <td className="border p-2">
          <img
           src={URL.createObjectURL(gift.file)}
           alt="Gift"
           className="h-16 w-16 object-cover rounded-md"
          />
         </td>
         <td className="border p-2">{gift.name}</td>

         <td className="border p-2">
          <button
           onClick={() => handleDelete(index)}
           className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
          >
           Delete
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    )}
   </div>
  </Fragment>
 );
};

export default AddEvent;
