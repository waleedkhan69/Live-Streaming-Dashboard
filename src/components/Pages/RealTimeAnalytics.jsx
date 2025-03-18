import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RealTimeAnalytics = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  const interval = setInterval(() => {
   const newData = {
    time: new Date().toLocaleTimeString(),
    viewers: Math.floor(Math.random() * 500),
    likes: Math.floor(Math.random() * 100),
    donations: Math.floor(Math.random() * 50)
   };
   setData((prevData) => [...prevData.slice(-10), newData]);
  }, 2000);

  return () => clearInterval(interval);
 }, []);

 return (
  <div className="p-5 bg-white h-[90vh] overflow-auto shadow-lg rounded-2xl">
   <h2 className="text-xl font-bold mb-4">📊 Real-Time Analytics</h2>
   <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="time" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Line type="monotone" dataKey="viewers" stroke="#8884d8" name="Viewers" />
     <Line type="monotone" dataKey="likes" stroke="#82ca9d" name="Likes" />
     <Line type="monotone" dataKey="donations" stroke="#ff7300" name="Gifts" />
    </LineChart>
   </ResponsiveContainer>
  </div>
 );
};

export default RealTimeAnalytics;
