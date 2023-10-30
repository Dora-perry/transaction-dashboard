import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import download from '../assets/download.svg'
import {IoIosClose} from 'react-icons/io'

const Modal = ({onClose, isOpen}) => {
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);

    // const handleStartDateChange = (date) => {
    //     setStartDate(date);
    //   };
    
    //   const handleEndDateChange = (date) => {
    //     setEndDate(date);
    //   };
    if (!isOpen) return null;

  return (
    <div className="fixed top-2 right-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <div className='flex justify-between'>
        <h2 className="text-[16px] font-bold mb-4">Filter </h2>
        <IoIosClose onClick={onClose}/>
        </div>
        {/* Filter options */}
        <div className='flex gap-2 mb-4' >
            <div className='border rounded-[100px] h-7 px-4 flex items-center justify-center text-[10px] font-bold'>Today</div>
            <div className='border rounded-[100px] h-7 px-4 flex items-center justify-center text-[10px] font-bold'>Last 7 days</div>
            <div className='border rounded-[100px] h-7 px-4 flex items-center justify-center text-[10px] font-bold'>This month</div>
            <div className='border rounded-[100px] h-7 px-4 flex items-center justify-center text-[10px] font-bold'>Last 3</div>
        </div>
            <div className='flex flex-col gap-2 mb-4'>
               <p className='text-[10px] font-bold'>Date Range</p>
               <div className='flex gap-2 '>
                <div className='bg-gray-100 flex px-8 justify-between rounded-[8px] p-2 text-[8px] items-center'>17 Jul 2023 <span><img src={download} alt="" /></span></div>
                <div className='bg-gray-100 flex px-8 justify-between rounded-[8px] p-2 text-[8px] items-center'>17 Jul 2023 <span><img src={download} alt="" /></span></div>
               </div>
            </div> 
            <div className='flex flex-col gap-2 mb-4'>
                <p className='text-[10px] font-bold'> Transaction status</p>
                <div className='bg-gray-100 flex px-8 justify-between rounded-[8px] py-3 text-[8px] items-center'>Store Transactions, Get Tipped, Withdrawals, ChargeBacks</div>
            </div>       
            <div className='flex flex-col gap-2 mb-4'>
                <p className='text-[10px] font-bold'> Transaction Type</p>
                <div className='bg-gray-100 flex px-8 justify-between rounded-[8px] py-3 text-[8px] items-center'>Successful, Pending, Failed</div>
            </div>

         <div className='flex gap-2'>
            <button className='flex items-center justify-center px-6 text-black rounded-full border'>clear</button>
            <button className='flex items-center justify-center bg-[#131316] text-white px-6 rounded-full'>apply</button>
            
            </div>       
              </div>
    </div>
  )
}

export default Modal