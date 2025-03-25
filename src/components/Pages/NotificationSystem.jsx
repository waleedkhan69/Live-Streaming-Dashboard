import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications((prev) => [...prev, newNotification]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 5000);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const alerts = [
        { message: '🎥 New Viewer Joined!', type: 'success' },
        { message: '💰 Donation Received: $20', type: 'success' },
        { message: '⚠️ Connection Issue Detected!', type: 'error' }
      ];
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      addNotification(randomAlert.message, randomAlert.type);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-5  right-5 space-y-3 z-50">
      {notifications.map((notification) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={`p-3 rounded-lg text-white shadow-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
          {notification.message}
        </motion.div>
      ))}
    </div>
  );
};

export default NotificationSystem;
