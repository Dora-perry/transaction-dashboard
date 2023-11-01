import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import {CiSettings, CiLogout} from  'react-icons/ci'
import {MdCardGiftcard, MdOutlineSwitchAccount} from 'react-icons/md'
import {BiBugAlt} from 'react-icons/bi'
import {GiStabbedNote,} from 'react-icons/gi'
import widgetIcon from '../assets/widgets.svg'
import useRevenueData from '../hooks/useRevenueData';




const UserInfo = ({isOpen, setIsOpen, setIsDropdown}) => {    
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen)  
        setIsDropdown(false)  
    }
    const {data} = useRevenueData('/user')
    const firstInitial = data && data.first_name ? data.first_name.charAt(0) : '';
    const lastInitial = data && data.last_name ? data.last_name.charAt(0) : '';
    const initials = `${firstInitial}${lastInitial}`

  return (
    <div className='relative'>
        <div className='p-1 pl-1 flex pr-2 items-center rounded-[100px] bg-gray-100 gap-2' onClick={toggleDropdown}>
        <div className='w-7 h-7 bg-[#131316] text-white flex items-center justify-center rounded-full text-[8px]'>{initials}</div>
        <span><img src={menu} alt="menu" /></span>
        </div>
        {isOpen && (
                <div className='absolute w-80 h-200 top-11 right-0 mt-2 bg-white  border-gray-300 p-2 rounded-[16px] shadow pt-8 pl-5'>
                    {/* Dropdown content */}
                    <ul>
                       <li className='mb-8'> 
                       <div className='flex gap-2'>
                  <span className='h-9 w-9 rounded-full flex items-center justify-center bg-[#131316] text-white'>{initials}</span>
                 <div className=''>
                     <p className='text-[14px] mb-1 font-bold'>{data.first_name} {data.last_name}</p>
                     <p className='text-[10px] text-[#56616B]'>{data.email}</p>
                 </div>
                  </div>
                       </li>
                       <li className='flex items-center gap-3 mb-7 ' >
                        <CiSettings  style={{ fontSize: '18px' }}/>
                           <p className='text-[13px] font-semibold'>Settings</p>
                       </li>
                       <li className='flex gap-3 mb-7  items-center'>
                        <GiStabbedNote style={{ opacity: 0.5 }}/>
                           <p className='text-[13px] font-semibold'>Purchase History</p>
                       </li>
                       <li className='flex gap-3 mb-7 items-center '>
                      < MdCardGiftcard style={{ opacity: 0.6 }}/>
                           <p className='text-[13px] font-semibold'>Refer and Earn</p>
                       </li>
                       <li className='flex gap-3 mb-7 items-center '>
                           <span><img src={widgetIcon} alt="" /></span>
                           <p className='text-[13px] font-semibold'>Integrations</p>
                       </li>
                       <li className='flex gap-3 mb-7 items-center '>
                           <BiBugAlt style={{ opacity: 0.6 }}/>
                           <p className='text-[13px] font-semibold'>Report Bug</p>
                       </li>
                       <li className='flex gap-3 mb-7  items-center'>
                           <MdOutlineSwitchAccount style={{ opacity: 0.6 }}/>
                           <p className='text-[13px] font-semibold'>Switch Account</p>
                       </li>
                       <li className='flex gap-3 mb-3 items-center'>
                       <CiLogout  style={{ transform: 'scaleX(-1)' }}/>
                           <p className='text-[13px] font-semibold'>Sign Out</p>
                       </li>
                      
                    </ul>
                </div>
            )} 
    </div>
  )
}

export default UserInfo