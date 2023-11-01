import React, { useState } from 'react'
import logo from '../assets/mainstack-logo.svg'
import homeIcon from '../assets/home.svg'
import chartIcon from '../assets/insert_chart.svg'
import groupIcon from '../assets/group.svg'
import widgetIcon from '../assets/widgets.svg'
import notificationIcon from '../assets/notifications.svg'
import chatIcon from '../assets/chat.svg'
import paymentIcon from '../assets/payments.svg'
import appbarList from '../assets/app-bar-list.svg'
import product from '../assets/product.svg'
// import productIcon from '../assets/Product Icons.svg'
// import productIcon2 from '../assets/ProductIcon.svg'
// import productIcon1 from '../assets/ProductIcons.svg'
import AppsDropdown from './AppsDropdown'


import './style.css'
import UserInfo from './UserInfo'



const Navbar = () => {
    const[isDropdown, setIsDropdown] = useState(false)
    const [appsButtonClicked, setAppsButtonClicked] = useState(false);
    const [isOpen, setIsOpen]= useState(false);




    const handleClick = () => {
        setIsDropdown(!isDropdown);
        setAppsButtonClicked(!appsButtonClicked);
        setIsOpen(false)

      }; 

  return (
      <div className='sticky top-0 bg-white'>
        <div className='px-4 pt-4'>
               <div className='h-[64px] flex justify-between items-center pl-5 bg-[#FFF] border rounded-[100px] p-2 shadow' >
        <div >
            <img src={logo} alt="logo" />
        </div>
       <ul className='flex gap-6'>
        <li className='flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={homeIcon} alt="home" />
            <p className='text-[13px]'>Home</p>
        </li>
        <li className='flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={chartIcon} alt="home" />
            <p className='text-[13px]'>Analytics</p>
        </li>
        <li className='flex space-x-1 items-center bg-[#131316] rounded-full px-3 text-white'>
            <img src={paymentIcon} alt="home"/>
            <p className='text-[13px]'>Revenue</p>
        </li>
        <li className='flex space-x-1 items-center hover:bg-gray-200 rounded-full p-2 text-gray-600'>
            <img src={groupIcon} alt="home" />
            <p className='text-[13px]'>CRM</p>
        </li>
        <li>
         <div className= "flex items-center p-2 gap-1 rounded-full cursor-pointer hover:bg-gray-200"
          onClick={handleClick}>
                    {appsButtonClicked ? <img src={homeIcon} alt='home'/> : <img src={widgetIcon} alt="home" />}
            <p className={` text-[13px] ${appsButtonClicked ? "text-[#56616B]" : "text-gray-600"}`}>
             {appsButtonClicked ? "Home" : "Apps"}
             </p>
              </div>
             {isDropdown && <AppsDropdown  />} 
                  </li>
        </ul>
        <ul className='flex gap-4 items-center justify-center'>
           <li><img src={notificationIcon} alt="notification" /></li>
           <li><img src={chatIcon} alt="chat" /></li>
           <li><UserInfo isOpen={isOpen} setIsOpen={setIsOpen} setIsDropdown={setIsDropdown}/></li>

        </ul>

        <div className='flex flex-col left-4 fixed top-[39%] items-center shadow rounded-full pb-2'>
            
                <div className='mb-3' ><img src={appbarList} alt="appbar"/></div>
                <div className='mb-4'><img src={product} alt=""/></div>
                <div className='mb-4'><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            
        </div>
             </div>
        </div>
    </div>
  )
}

export default Navbar;