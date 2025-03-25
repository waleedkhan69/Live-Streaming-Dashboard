import { Fragment } from "react"
import React from "react"

const WithdrawRequest = () => {
 const paymentMethodArry = [
  {
   id: 1,
   name: "HBL",
   agentName: "Waleed",
   coinsamout: 12,
   account: 200,
   fee: "1223213",
  },
  {
   id: 2,
   name: "MCB",
   agentName: "Ahmed",
   coinsamout: 24,
   account: 300,
   fee: "9876",
  },
  {
   id: 3,
   name: "UBL",
   agentName: "Ali",
   coinsamout: 18,
   account: 150,
   fee: "4567890",
  },
  {
   id: 4,
   name: "Meezan",
   agentName: "Zubair",
   coinsamout: 10,
   account: 500,
   fee: "3216547",
  },
 ];
 return (
  <Fragment>
   <div className=" flex justify-evenly items-center">
    <h1 className="text-3xl text-white">Today Withdraw</h1>
    <h1 className="text-3xl text-white">Total Withdraw</h1>
   </div>
   <div className=" flex justify-evenly items-center">
    <h1 className="text-2xl text-gray-200">561</h1>
    <h1 className="text-2xl text-gray-200">2344</h1>
   </div>
   <table className="w-full text-center border-collapse border border-gray-300">
    <thead className="bg-gray-200">
     <tr>
      <th className="border p-2">ID</th>
      <th className="border p-2">Account</th>
      <th className="border p-2">Bank Name</th>
      <th className="border p-2">Coins</th>
      <th className="border p-2">Withdraw</th>
      <th className="border p-2">Action</th>
     </tr>
    </thead>
    <tbody>
     {paymentMethodArry.map((user, index) => (
      <tr key={index} className="odd:bg-white even:bg-gray-100">
       <td className="border p-2">{user.id}</td>
       <td className="border p-2">{user.account}</td>
       <td className="border p-2">{user.name}</td>
       <td className="border p-2">{user.coinsamout}</td>
       <td className="border p-2">{user.fee}</td>
       <td className="border p-2">
        <div className="flex items-center justify-evenly">
         <button className="px-3 py-1 rounded text-white cursor-pointer bg-green-500 hover:bg-green-600 transition">
          Approve
         </button>
         <button className="px-3 py-1 rounded text-white cursor-pointer bg-red-500 hover:bg-red-600 transition">
          Decline
         </button>
        </div>
       </td>
      </tr>
     ))}
    </tbody>
   </table>

  </Fragment>
 )
}
export default WithdrawRequest