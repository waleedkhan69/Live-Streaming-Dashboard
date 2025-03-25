import { Fragment } from "react"
import React from "react"

const PaymentMethod = () => {
 const paymentMethodArry = [
  {
   id: 1,
   name: "HBL",
   fee: "1223213",
  },
  {
   id: 1,
   name: "HBL",
   fee: "1223213",
  },
  {
   id: 1,
   name: "HBL",
   fee: "1223213",
  },
  {
   id: 1,
   name: "HBL",
   fee: "1223213",
  },
 ]
 return (
  <Fragment>
   <div className="text-center text-white p-5 text-3xl">

    <h1 className="mx-auto ">Payment Method</h1>
   </div>
   <table className="w-full text-center border-collapse border border-gray-300">
    <thead className="bg-gray-200">
     <tr>
      <th className="border p-2">Bank ID</th>
      <th className="border p-2">Bank Name</th>
      <th className="border p-2">Sevcies Fee</th>
      <th className="border p-2">action</th>
     </tr>
    </thead>
    <tbody>
     {paymentMethodArry.map((user, index) => (
      <tr key={index} className="odd:bg-white even:bg-gray-100">
       <td className="border p-2">{user.id}</td>
       <td className="border p-2">{user.name}</td>
       <td className="border p-2">{user.fee}</td>
       <td className="border p-2">
        <div className="flex   items-start justify-evenly bg-red ">



         <button className="px-3 py-1 rounded text-white cursor-pointer bg-green-500">Update</button>
         <button className="px-3 py-1 rounded text-white cursor-pointer bg-red-500">Delete</button>
        </div>
       </td>
      </tr>

     ))}

    </tbody>
   </table>
  </Fragment>
 )
}
export default PaymentMethod