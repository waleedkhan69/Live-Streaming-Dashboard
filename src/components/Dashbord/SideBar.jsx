import React, { useState } from "react";
import { FaUsers, FaChartLine, FaLightbulb, FaGift, FaStore, FaHeart, FaComment } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { GoGitPullRequest } from "react-icons/go";
import { BiMoneyWithdraw } from "react-icons/bi";
import { SiOpenmediavault } from "react-icons/si";


import { MdOutlineEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineAdminPanelSettings, MdOutlineEventSeat } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { PiUsersThreeLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";


import { Link } from "react-router-dom";
import AdminSettings from "./Settings/AdminSetting.jsx";
const SideBar = ({ setShow }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const navItems = [
    { path: "/", label: "All User", icon: <FaUsers className="group-hover:text-blue-600" />, onClick: () => setShowUserDetails(!showUserDetails) },
    { path: "/real-time-analytics", label: "Real Time Analytics", icon: <FaChartLine className="group-hover:text-green-400" /> },
    { path: "/creator-insight", label: "Creator Insight", icon: <FaLightbulb className="group-hover:text-yellow-400" /> },
    { path: "/create-gift", label: "Gift Types", icon: <FaGift className="group-hover:text-pink-400" /> },
    { path: "/add-gift", label: "Add Gift ", icon: <FaGift className="group-hover:text-pink-400" /> },
    { path: "/gift-store", label: "Gift Store", icon: <FaStore className="group-hover:text-purple-500" /> },
    { path: "/add-event", label: "Add Event", icon: <MdOutlineEvent className="group-hover:text-purple-500" /> },
    { path: "/total-event", label: "Total Event", icon: <MdOutlineEventSeat className="group-hover:text-purple-500" /> },
    { path: "/add-game", label: "Add Game", icon: <IoLogoGameControllerB className="group-hover:text-purple-500" /> },
    { path: "/payment-method", label: "Payment Method", icon: <RiSecurePaymentFill className="group-hover:text-red-600" /> },
    { path: "/agent-request", label: "Agent Request", icon: <GoGitPullRequest className="group-hover:text-teal-400" /> },
    { path: "/withdraw-request", label: "Withdraw Request", icon: <BiMoneyWithdraw className="group-hover:text-teal-400" /> },
    { path: "/media-controls", label: "Media controles", icon: <SiOpenmediavault className="group-hover:text-teal-400" /> },
    { label: "Settings", icon: <CiSettings className="group-hover:text-blue-400" />, onClick: () => setShowSettings(!showSettings) }
  ];

  const userDetails = [
    { path: "/total-user", label: "Total Users", icon: <PiUsersThreeLight className="text-blue-400" /> },
    { path: "/monthly-user", label: "Monthly Users", icon: < FaUsers className="text-blue-400" /> },
    { path: "/weekly-user", label: "Weekly Users", icon: <HiUsers className="text-blue-400" /> }
  ];


  return (
    <div className="h-[96vh] text-sm bg-[#16113A] border-r overflow-auto w-full shadow-md py-6 px-4 pb-2 transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400" style={{ scrollbarWidth: "none" }}>
      <h1 className="text-white font-semibold text-2xl">Admin Dashboard</h1>
      <div className="flex flex-col mt-7 justify-evenly gap-8 items-start">
        {navItems.map((item, index) => (
          <div key={index} className="w-full">
            <div
              className="flex items-center gap-3 group cursor-pointer rounded-lg text-white"
              onClick={item.onClick || null}
            >
              <div className="text-xl">{item.icon}</div>
              <div className="flex items-center gap-1 w-full justify-between">
                {item.path ? (
                  <Link to={item.path} className="text-md font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-md font-medium">{item.label}</span>
                )}


                {(item.label === "All User" || item.label === "Settings") && (
                  <RiArrowDownSLine
                    className={`transform transition-transform duration-300 ${item.label === "All User" ? (showUserDetails ? "rotate-180" : "rotate-0") : (showSettings ? "rotate-180" : "rotate-0")}`}
                  />
                )}
              </div>
            </div>


            {item.label === "All User" && showUserDetails && (
              <div className="flex flex-col gap-4 pl-8">
                {userDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    {detail.icon}
                    <Link to={detail.path} className="text-md font-medium">
                      {detail.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
            {item.label === "Settings" && showSettings && (
              <AdminSettings />
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;