import { Fragment } from "react";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const totalUsers = 30765;
const monthlyUsers = 9500;
const weeklyUsers = 8000;

const createData = (value) => [
 { name: "Used", value, color: "#4CAF50" },
 { name: "Remaining", value: totalUsers - value, color: "#E0E0E0" },
];

const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, data, cx, cy, iR, oR, color) => {
 let total = 0;
 data.forEach((v) => {
  total += v.value;
 });
 const ang = 180.0 * (1 - value / total);
 const length = (iR + 2 * oR) / 3;
 const sin = Math.sin(-RADIAN * ang);
 const cos = Math.cos(-RADIAN * ang);
 const r = 5;
 const x0 = cx + 5;
 const y0 = cy + 5;
 const xba = x0 + r * sin;
 const yba = y0 - r * cos;
 const xbb = x0 - r * sin;
 const ybb = y0 + r * cos;
 const xp = x0 + length * cos;
 const yp = y0 + length * sin;

 return [
  <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
  <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
 ];
};

const UserModel = () => {
 return (
  <Fragment>
   <div className="flex justify-evenly items-center   text-white p-5 rounded-lg ">
    {[totalUsers, monthlyUsers, weeklyUsers].map((value, index) => (
     <div key={index} className="flex flex-col items-center justify-center gap-2 bg-gray-700  p-4 rounded-lg shadow-md ">
      <p className="font-semibold text-lg">
       {index === 0 ? "Total Users" : index === 1 ? "Last Month " : "Last Week"}
      </p>
      <PieChart width={200} height={100}>
       <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={createData(value)}
        cx={cx / 2}
        cy={cy / 2}
        innerRadius={iR / 2}
        outerRadius={oR / 2}
        fill="#8884d8"
        stroke="none"
       >
        {createData(value).map((entry, index) => (
         <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
       </Pie>
       {needle(value, createData(value), cx / 2, cy / 2, iR / 2, oR / 2, "#FFD700")}
      </PieChart>
      <p className="text-lg font-bold">{value}</p>
     </div>
    ))}
   </div>
  </Fragment>
 );
};

export default UserModel;
