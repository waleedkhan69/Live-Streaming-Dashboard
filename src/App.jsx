import React, { Fragment } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'

import LogInPage from './components/Dashbord/LogInPage'
import SignUp from './components/Dashbord/SignUp'
import ProtectedRoute from './components/Dashbord/ProtectedRoute'
import MainDAshboard from './components/MainDAshboard'
function App() {

  return (

    <Fragment>
      <Routes>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogInPage />} />


        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainDAshboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  )
}

export default App
