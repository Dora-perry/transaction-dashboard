import React, { useState } from 'react'
import logo from '../assets/mainstack-logo.png'
import homeIcon from '../assets/home.svg'
import chartIcon from '../assets/insert_chart.svg'
import groupIcon from '../assets/group.svg'
import widgetIcon from '../assets/widgets.svg'
import notificationIcon from '../assets/notifications.svg'
import chatIcon from '../assets/chat.svg'
import paymentIcon from '../assets/payments.svg'
import appbarList from '../assets/app-bar-list.svg'
import productIcon from '../assets/Product Icons.svg'
import productIcon2 from '../assets/ProductIcon.svg'
import productIcon1 from '../assets/ProductIcons.svg'
import AppsDropdown from './AppsDropdown'
import expand from '../assets/expand_more.svg'


import './style.css'
import UserInfo from './UserInfo'



const Navbar = () => {
    const[isDropdown, setIsDropdown] = useState(false)
    const [appsButtonClicked, setAppsButtonClicked] = useState(false);



    const handleClick = () => {
        setIsDropdown(!isDropdown);
        setAppsButtonClicked(!appsButtonClicked);
      }; 

  return (
      <div className='sticky top-0 bg-white'>
        <div className='px-4 pt-4'>
            <div className='realative'>
               <div className=' h-[64px] flex justify-between items-center bg-[#FFF] border rounded-[100px] p-2 shadow' >
        <div >
            <img src={logo} alt="logo" />
        </div>
       <ul className='flex'>
        <li className='flex space-x-1 items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={homeIcon} alt="home" />
            <p>Home</p>
        </li>
        <li className='flex space-x-1 items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={chartIcon} alt="home" />
            <p>Analytics</p>
        </li>
        <li className='flex space-x-1 items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={paymentIcon} alt="home" />
            <p>Revenue</p>
        </li>
        <li className='flex space-x-1 items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={groupIcon} alt="home" />
            <p>CRM</p>
        </li>
        <li>
         <div className={`flex items-center p-2 gap-1 rounded-full cursor-pointer ${appsButtonClicked ? "bg-neutral-900" : "hover:bg-gray-200"}`}
          onClick={handleClick}>
                    <img src={widgetIcon} alt="home" />
            <p className={`font-[degularsemibold] text-base ${appsButtonClicked ? "text-white" : "text-gray-600"}`}>
                App {appsButtonClicked ? " | Link in Bio" : ""}
             </p>
            {appsButtonClicked && <img src={expand} alt="expand" />}
              </div>
             {isDropdown && <AppsDropdown />} 
                  </li>
        </ul>
        <ul className='flex gap-4 items-center justify-center'>
           <li><img src={notificationIcon} alt="notification" /></li>
           <li><img src={chatIcon} alt="chat" /></li>
           <li><UserInfo/></li>

        </ul>

        <div className='flex flex-col left-4 fixed top-[39%] items-center shadow rounded-full pb-2'>
            
                <div className='mb-3' ><img src={appbarList} alt="appbar"/></div>
                <div className='mb-4'><img src={productIcon} alt=""/></div>
                <div className='mb-4'><img src={productIcon1} alt="" /></div>
                <div><img src={productIcon2} alt="" /></div>
            
        </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;