import React, { Fragment } from "react"
import img from "../../../assets/user.webp"
import { IoIosSearch } from "react-icons/io";
const MonthlyUsers = () => {
 const [searchquery, setSearchQuery] = React.useState("");
 const TotalUsers = [
  { coins: 100, pic: img, name: "waleed", idLevel: 1, emai: "waleed@gmail.com" },
  { coins: 100, pic: img, name: "naveed", idLevel: 1, emai: "waleed@gmail.com" },
  { coins: 100, pic: img, name: "saqlain", idLevel: 2, emai: "waleed@gmail.com" },
  { coins: 100, pic: img, name: "waleed", idLevel: 4, emai: "waleed@gmail.com" },
  { coins: 100, pic: img, name: "zain", idLevel: 5, emai: "waleed@gmail.com" },
  { coins: 100, pic: img, name: "awais", idLevel: 6, emai: "awais@gmail.com" },
 ]
 const searchDataFilter = TotalUsers.filter(item => item.name.toLowerCase().includes(searchquery.toLowerCase()) ||
  item.idLevel.toString().toLowerCase().includes(searchquery.trim().toLowerCase()) ||
  item.emai.toLowerCase().includes(searchquery.trim().toLowerCase()));

 return (
  <Fragment>
   <div className="h-[90vh] overflow-auto">
    <div className="flex p-4 justify-between">
     <div className=" flex justify-center items-center">
      <h1 className="text-2xl text-white">Monthly Users</h1>
     </div>
     <div className="bg-white flex justify-between items-center  px-3 py-1 rounded-2xl w-[25%]">
      <input type="text" value={searchquery} onChange={(e) => setSearchQuery(e.target.value)} className="outline-none w-full " name="" id="" placeholder="search here" />
      <IoIosSearch />
     </div>
    </div>
    <table className="w-full text-center border-collapse border border-gray-300">
     <thead className="bg-gray-200">
      <tr>
       <th className="border p-2">Users Image</th>
       <th className="border p-2">Total Coins</th>
       <th className="border p-2">User Name</th>
       <th className="border p-2">ID Level</th>
       <th className="border p-2">Email</th>
       <th className="border p-2">Actiion</th>
      </tr>

     </thead>
     <tbody>
      {searchDataFilter.map((user, index) => {
       return <tr key={index} className="odd:bg-white even:bg-gray-100">
        <td className="border p-2 h-6 w-12 ">
         <img src={user.pic} alt="" className="w-full" />
        </td>
        <td className="border p-2" >
         {user.coins}
        </td>
        <td className="border p-2">
         {user.name}
        </td>
        <td className="border p-2">
         {user.idLevel}
        </td>
        <td className="p-2 border">
         {user.emai}
        </td>
        <td className="p-2 border">
         <div className="flex   items-start justify-evenly bg-red ">



          <button className="px-3 py-1 rounded text-white cursor-pointer bg-green-500">Approved</button>
          <button className="px-3 py-1 rounded text-white cursor-pointer bg-red-500">Reject</button>
         </div>

        </td>
       </tr>

      })}
     </tbody>
    </table>
   </div>
  </Fragment>
 )
}
export default MonthlyUsers