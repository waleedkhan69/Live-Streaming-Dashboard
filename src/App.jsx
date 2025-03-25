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

// import GiftStore from './components/GiftSection/GiftStore'
import MediaControls from './components/Pages/MediaControls '
import UserModel from './components/Dashbord/Users/UserModel'
import TotalUsers from './components/Dashbord/Users/TotalUsers'
import MonthlyUsers from './components/Dashbord/Users/MothlyUsers'
import WeeklyUsers from './components/Dashbord/Users/WeeklyUsers'
import CreateGift from './components/Dashbord/Gift/CreateGift'
import AddGift from './components/Dashbord/Gift/AddGift'
import AddEvent from './components/Dashbord/Event/AddEvent'
import TotalEvent from './components/Dashbord/Event/TotalEvent'
import AddGame from './components/Dashbord/GameImage/AddGame'
import PaymentMethod from './components/Dashbord/Payment/PaymentMethod'
import AgentRequest from './components/Dashbord/AgentSection/AgentRequest'
import WithdrawRequest from './components/Dashbord/withdrawSection/WithdrawRequest'




function App() {


  return (
    <Fragment>
      <div className='flex bar  bg-[#00294B] '>
        <div className='  w-[20%]  '>
          <SideBar />
        </div>
        <div className='w-[80%]  h-[90vh]  '>
          <Navbar />

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
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/total-event" element={<TotalEvent />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
            <Route path="/agent-request" element={<AgentRequest />} />
            <Route path="/withdraw-request" element={<WithdrawRequest />} />
            {/* <Route path="/gift-store" element={<GiftStore />} /> */}
          </Routes>
        </div>

      </div >

      <ToastContainer />
    </Fragment>
  )
}

export default App
