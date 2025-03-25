import { Fragment } from "react"
import React from "react"

const AgentRequest = () => {
 const paymentMethodArry = [
  {
   id: 1,
   name: "HBL",
   agentName: 'waleed',
   fee: "1223213",
  },
  {
   id: 1,
   name: "HBL",
   agentName: 'waleed',
   fee: "1223213",
  },
  {
   id: 1,
   name: "HBL",
   fee: "1223213",
   agentName: 'waleed',
  },
  {
   id: 1,
   name: "HBL",
   agentName: 'waleed',
   fee: "1223213",
  },
 ]
 return (
  <Fragment>
   <div className=" flex justify-evenly items-center">
    <h1 className="text-3xl text-white">Today Request</h1>
    <h1 className="text-3xl text-white">Total Request</h1>
   </div>
   <div className=" flex justify-evenly items-center">
    <h1 className="text-2xl text-gray-200">521</h1>
    <h1 className="text-2xl text-gray-200">2344</h1>
   </div>
   <table className="w-full text-center border-collapse border border-gray-300">
    <thead className="bg-gray-200">
     <tr>
      <th className="border p-2">Request ID</th>
      <th className="border p-2">Access ID</th>
      <th className="border p-2">Agent Name</th>
      <th className="border p-2">Request Type</th>
      <th className="border p-2">action</th>
     </tr>
    </thead>
    <tbody>
     {paymentMethodArry.map((user, index) => (
      <tr key={index} className="odd:bg-white even:bg-gray-100">
       <td className="border p-2">{user.id}</td>
       <td className="border p-2">{user.name}</td>
       <td className="border p-2">{user.agentName}</td>
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
export default AgentRequest