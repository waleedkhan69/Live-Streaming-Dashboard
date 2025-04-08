import { Fragment } from "react"
import AgentRequest from "./Dashbord/AgentSection/AgentRequest"
import AddEvent from "./Dashbord/Event/AddEvent"
import TotalEvent from "./Dashbord/Event/TotalEvent"
import AddGame from "./Dashbord/GameImage/AddGame"
import AddGift from "./Dashbord/Gift/AddGift"
import CreateGift from "./Dashbord/Gift/CreateGift"
import PaymentMethod from "./Dashbord/Payment/PaymentMethod"
import MonthlyUsers from "./Dashbord/Users/MothlyUsers"
import TotalUsers from "./Dashbord/Users/TotalUsers"
import UserModel from "./Dashbord/Users/UserModel"
import WeeklyUsers from "./Dashbord/Users/WeeklyUsers"
import WithdrawRequest from "./Dashbord/withdrawSection/WithdrawRequest"
import CreatorInsights from "./Pages/CreatorInsight"
import MediaControls from "./Pages/MediaControls "
import RealTimeAnalytics from "./Pages/RealTimeAnalytics"

const MainDAshboard = () => {
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
      <Route path="/dasboard" element={<UserModel />} />
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

     </Routes>
    </div>
   </div >

  </Fragment>
 )
}
export default MainDAshboard