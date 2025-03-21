import React, { Fragment, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import SideBar from './components/Dashbord/SideBar'
import Navbar from './components/Dashbord/Navbar'
import GetAllUsers from './components/Pages/GetAllUsers'
import RealTimeAnalytics from './components/Pages/RealTimeAnalytics'
import CreatorInsights from './components/Pages/CreatorInsight'
import NotificationSystem from './components/Pages/NotificationSystem'

import { ToastContainer } from 'react-toastify';

import GiftStore from './components/GiftSection/GiftStore'
import MediaControls from './components/Pages/MediaControls '
import UserModel from './components/Dashbord/Users/UserModel'
import TotalUsers from './components/Dashbord/Users/TotalUsers'
import MonthlyUsers from './components/Dashbord/Users/MothlyUsers'
import WeeklyUsers from './components/Dashbord/Users/WeeklyUsers'
import CreateGift from './components/Dashbord/Gift/CreateGift'
import AddGift from './components/Dashbord/Gift/AddGift'
import MainSetting from './components/Dashbord/Settings/MainSetting'

function App() {
  const [shaw, setShow] = useState(true);
  // const [gifts, setGifts] = useState([]);
  // const handleAddGift = (newgift) => {
  //   setGifts((prevGift) => [...prevGift, newgift]);
  // }
  return (
    <Fragment>
      <div className='flex bar  bg-[#00294B] '>
        <div className='  w-[20%]  '>
          <SideBar setShow={setShow} />
        </div>
        <div className='w-[80%]  h-[90vh]  '>
          <Navbar />
          {shaw && < MainSetting setShow={setShow} />}
          <NotificationSystem />
          <Routes>
            <Route path="/" element={<UserModel />} />
            <Route path="/total-user" element={<TotalUsers />} />
            <Route path="/monthly-user" element={<MonthlyUsers />} />
            <Route path="/weekly-user" element={<WeeklyUsers />} />
            <Route path="/real-time-analytics" element={<RealTimeAnalytics />} />
            <Route path="/creator-insight" element={<CreatorInsights />} />
            <Route path="/media-controls" element={<MediaControls />} />
            <Route path="/create-gift" element={<CreateGift />} />
            <Route path="/add-gift" element={<AddGift />} />
            <Route path="/gift-store" element={<GiftStore />} />
          </Routes>
        </div>

      </div >
      <ToastContainer />
    </Fragment>
  )
}

export default App
