import React from 'react'
import logo from '../assets/mainstack-logo.png'
import homeIcon from '../assets/home.svg'
import chartIcon from '../assets/insert_chart.svg'
import groupIcon from '../assets/group.svg'
import widgetIcon from '../assets/widgets.svg'
import notificationIcon from '../assets/notifications.svg'
import chatIcon from '../assets/chat.svg'
import paymentIcon from '../assets/payments.svg'
import appbarList from '../assets/app-bar-list.png'
import productIcon from '../assets/Product Icons.png'
import productIcon2 from '../assets/ProductIcon.png'
import productIcon1 from '../assets/ProductIcons.png'


import './style.css'
import UserInfo from './UserInfo'



const Navbar = () => {

    const handleClick = () => {
        alert('Button clicked!');
      };
 const menuList = [
    {
        icon: homeIcon,
        name: "home"
    },
    {
        icon: chartIcon,
        name: "Analytics"
    },
    {
        icon: paymentIcon,
        name: "Revenue"
    },
    {
        icon: groupIcon,
        name: "CRM"
    },
    {
        icon: widgetIcon,
        name: "Apps"
    }
 ] 

  return (
    <div className='fixed w-[1200px] h-[64px] flex justify-between mx-auto items-center px-4 bg-[#FFF] border rounded-[100px] box-shadow' >
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className='flex '>
            {menuList.map((item, index)=> (
                <li key={index} className='px-5'>
                    <div className='flex space-x-1'>
                    <img src={item.icon} alt={item.name} />
                    <span className=''>{item.name}</span>
                    </div>
                   
                </li>
            ))}
        </ul>
        <ul className='flex gap-2 items-center justify-center'>
           <li><img src={notificationIcon} alt="notification" /></li>
           <li><img src={chatIcon} alt="chat" /></li>
           <li><UserInfo/></li>

        </ul>

        <div className='flex flex-col fixed top-[35%] items-center'>
            
                <div><img src={appbarList} alt="appbar"/></div>
                <div><img src={productIcon} alt=""/></div>
                <div><img src={productIcon1} alt="" /></div>
                <div><img src={productIcon2} alt="" /></div>
            
        </div>
    </div>
  )
}

export default Navbar;