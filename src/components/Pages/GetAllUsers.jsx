import React, { Fragment } from "react";

const GetAllUsers = () => {
  const TableArry = [
    { pic: "1", name: "Waleed", email: "waleed@gmail.com", status: "Active" },
    { pic: "2", name: "Ali", email: "ali@gmail.com", status: "Inactive" },
    { pic: "3", name: "Ahmed", email: "ahmed@gmail.com", status: "Active" },
    { pic: "4", name: "Saram", email: "saram@gmail.com", status: "Inactive" },
  ];

  return (
    <Fragment>
      <h1 className="text-center text-2xl p-2 font-bold">All Users </h1>
      <table className="w-full text-center border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Users Images</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Edit</th>
            <th className="p-2 border">Delete</th>
            <th className="p-2 border">Update</th>
          </tr>
        </thead>
        <tbody>
          {TableArry.map((user, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="p-2 border">
                <img
                  src={`https://via.placeholder.com/50?text=${user.pic}`}
                  alt="User"
                  className="rounded-full w-10 h-10 mx-auto"
                />
              </td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td
                className={`p-2 border ${user.status === "Active"
                  ? "text-green-500"
                  : "text-red-500"
                  }`}
              >
                {user.status}
              </td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
              </td>
              <td className="p-2 border">
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
              <td className="p-2 border">
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default GetAllUsers;
