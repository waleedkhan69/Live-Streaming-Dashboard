import { Fragment, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddGame = () => {
 const [data, setData] = useState({
  file: null,
  type: "",
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

  if (!data.file, !data.type) {
   toast.error("All fields are required.");
   return;
  }

  if (!data.file.type.startsWith("image/")) {
   toast.error("Only image files are allowed.");
   return;
  }

  setGifts((prevGifts) => [...prevGifts, data]);
  toast.success("Gift Created Successfully!");

  setData({ file: null, type: "" });
 };

 const handleDelete = (index) => {
  const updatedGifts = gifts.filter((_, i) => i !== index);
  setGifts(updatedGifts);
  toast.info("Gift Deleted Successfully!");
 };

 return (
  <Fragment>
   <div className=" h-[90vh] overflow-auto flex items-center flex-col justify-center p-4">
    <div className="bg-white mt-28 shadow-lg rounded-lg p-6 w-full max-w-md">
     <h1 className="text-2xl font-bold text-center mb-4">Create Game</h1>
     <form onSubmit={handleClick} className="space-y-4 ">
      <input
       type="file"
       accept="image/*"
       name="file"
       onChange={handleChange}
       className="block w-full p-2 border border-gray-300 rounded-md cursor-pointer"
      />



      <select
       name="type"
       value={data.type}
       onChange={handleChange}
       className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       <option value="">Select Image Type</option>
       <option value="Classic">JPEG </option>
       <option value="Free">PNG</option>
       <option value="Privilage">WebP</option>

      </select>

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

        <th className="border p-2">Type</th>
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

         <td className="border p-2">{gift.type}</td>
         <td className=" gap-4 flex justify-center p-2">
          <button
           onClick={() => handleDelete(index)}
           className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
          >
           Delete
          </button>
          <button
           onClick={() => handleDelete(index)}
           className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
          >
           Update
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

export default AddGame;
