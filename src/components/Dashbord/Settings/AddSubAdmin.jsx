import { Fragment, useState } from "react"
import React from "react"
import { toast } from "react-toastify"
const AddSubAdmin = ({ onCancel }) => {
 const [email, setEmail] = useState('')
 const isValidation = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
 }
 const handelAddSubAdmin = () => {
  if (!email) {
   toast.warning("Email is required");
  } else if (!isValidation()) {
   toast.warning("Invalid email format");
  } else {
   toast.success("SubAdmin Added Successfully!");
   onCancel();
  }
 }
 return (
  <Fragment>
   <div className="bg-white shadow-xl border border-gray-300 fixed z-30 px-6 py-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md rounded-3xl">
    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Add SubAdmin</h2>

    <div className="mb-4">
     <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
     <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Enter SubAdmin Email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
     />
    </div>

    <div className="flex justify-between gap-4">
     <button
      onClick={onCancel}
      className="w-1/2 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
     >
      Cancel
     </button>
     <button onClick={handelAddSubAdmin}
      className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
     >
      Add
     </button>
    </div>
   </div>

  </Fragment>
 )
}
export default AddSubAdmin