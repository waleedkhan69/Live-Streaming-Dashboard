// import { Fragment, useState } from "react";
// import React from "react";

// const GiftStore = ({ gifts }) => {
//  const [filterType, setFilterType] = useState("");

//  const filteredGifts = filterType
//   ? gifts.filter((gift) => gift.type === filterType)
//   // : gifts;

//  return (
//   <Fragment>
//    <div className="h-[90vh] overflow-auto">

//     <div className="flex justify-evenly   bg-gray-500 p-4 text-white my-4">
//      {["", "Classic", "Free", "Couple", "Privilage", "Event"].map((type) => (
//       <h1
//        key={type}
//        className={`cursor-pointer ${filterType === type ? "font-bold text-green-500" : ""}`}
//        onClick={() => setFilterType(type)}
//       >
//        {type || " All"}
//       </h1>
//      ))}
//     </div>


//     <div className="flex justify-start  bg-yellow-400   flex-wrap gap-4 ">
//      {filteredGifts.map((gift, index) => (
//       <div key={index} className="border w-[15%] h-[30%] bg-red-500 p-2 rounded shadow">
//        <img
//         src={URL.createObjectURL(gift.file)}
//         alt={gift.type}
//         className="  object-cover  rounded-md"
//        />
//        <h2 className="text-lg font-bold mt-2">{gift.type}</h2>
//        <div className="flex justify-between items-center">
//         <p>Price: ${gift.price}</p>
//         <button className="bg-green-600 px-2 py-1 rounded-xl text-white">send</button>
//        </div>

//       </div>
//      ))}

//     </div>
//    </div>

//   </Fragment>
//  );
// };

// export default GiftStore;
