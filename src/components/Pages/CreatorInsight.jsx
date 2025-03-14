import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CreatorInsights = () => {
 const [insightData, setInsightData] = useState([]);

 useEffect(() => {
  const generateData = () => {
   return [
    { month: 'Jan', followers: 1500, earnings: 200, likes: 300, comments: 150, shares: 50 },
    { month: 'Feb', followers: 1800, earnings: 250, likes: 400, comments: 180, shares: 60 },
    { month: 'Mar', followers: 2100, earnings: 320, likes: 500, comments: 200, shares: 70 },
    { month: 'Apr', followers: 2500, earnings: 400, likes: 600, comments: 250, shares: 90 },
    { month: 'May', followers: 3000, earnings: 500, likes: 750, comments: 300, shares: 110 },
   ];
  };
  setInsightData(generateData());
 }, []);

 return (
  <div className="p-5 bg-white shadow-lg rounded-2xl">
   <h2 className="text-xl font-bold mb-4">📈 Profile & Creator Insights</h2>
   <ResponsiveContainer width="100%" height={300}>
    <BarChart data={insightData}>
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="month" />
     <YAxis />
     <Tooltip />
     <Legend />
     <Bar dataKey="followers" fill="#4CAF50" name="Followers" />
     <Bar dataKey="earnings" fill="#FFC107" name="Earnings ($)" />
     <Bar dataKey="likes" fill="#2196F3" name="Likes" />
     <Bar dataKey="comments" fill="#E91E63" name="Comments" />
     <Bar dataKey="shares" fill="#9C27B0" name="Shares" />
    </BarChart>
   </ResponsiveContainer>
  </div>
 );
};

export default CreatorInsights;
