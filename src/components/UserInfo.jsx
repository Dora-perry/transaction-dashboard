import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import useFetchUser from '../hooks/useFetchUser';

const UserInfo = () => {
    const [isOpen, setIsOpen]= useState(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen)
        const { userData, loading } = useFetchUser();
       
    }
  return (
    <div className='relative'>
        <div className='p-1 pl-1 flex pr-2 items-center rounded-[100px] bg-gray-100 gap-2 ' onClick={toggleDropdown}>
        <div className='w-7 h-7 bg-[#131316] text-white flex items-center justify-center rounded-full text-[8px]'>OJ</div>
        <span><img src={menu} alt="menu" /></span>
        </div>
        {isOpen && (
                <div className='absolute w-80 h-200 top-11 right-0 mt-2 bg-white border border-gray-300 p-2 rounded shadow'>
                    {/* Dropdown content */}
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            )}
        
        
    </div>
  )
}

export default UserInfo