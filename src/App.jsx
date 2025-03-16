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
import CreateGift from './components/GiftSection/CreateGift'
import GiftStore from './components/GiftSection/GiftStore'
function App() {

  const [gifts, setGifts] = useState([]);
  const handleAddGift = (newgift) => {
    setGifts((prevGift) => [...prevGift, newgift]);
  }
  return (
    <Fragment>

      <div className='flex bar  '>
        <div className='  w-[20%]  '>
          <SideBar />
        </div>
        <div className='w-[80%]'>
          <Navbar />
          <NotificationSystem />
          <Routes>
            <Route path="/all-users" element={<GetAllUsers />} />
            <Route path="/real-time-analytics" element={<RealTimeAnalytics />} />
            <Route path="/creator-insight" element={<CreatorInsights />} />
            <Route path="/create-gift" element={<CreateGift onAddGift={handleAddGift} />} />
            <Route path="/gift-store" element={<GiftStore gifts={gifts} />} />


          </Routes>
        </div>

      </div >
      <ToastContainer />
    </Fragment >
  )
}

export default App
