import React, { useState } from 'react'
import download from '../assets/download.svg'
import expand from '../assets/expand_more.svg'
import Modal from './Modal'
import TransactionList from './TransactionList'
import useRevenueData from '../hooks/useRevenueData'
import { useAppContext } from '../context/AppContext'


const Transaction = () => {
    const[isOpenModal, setIsModalOpen] = useState(false)
    
    const {startDate, setStartDate, endDate, setEndDate} = useAppContext()
    const {data, loading} = useRevenueData('/transactions')

    const handleStartDateChange = (date) => {
        setStartDate(date);
      };
    
      const handleEndDateChange = (date) => {
        setEndDate(date);
      };
    console.log(data);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const [transactionTime, setTransactionTime] = useState('all time')


  return (
    <div className="flex flex-col pt-20">
    <div className="flex justify-between">
      <div className="text-neutral-900 flex flex-col ">
        <p className="font-[degular] font-bold text-[18px]">{data.length} Transactions</p>
        <p className="font-[degular] text-[10px] text-gray-600">Your transactions for {transactionTime}</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-100 text-[12px] justify-center items-center flex rounded-full px-5 py-5 w-[85px] h-[35px]  font-[degular] font-bold" onClick={openModal}>
          Filter
          <img src={expand} alt="expand" />
        </button>
        <button className="bg-gray-100 text-[12px] py-5 px-5 justify-center items-center flex rounded-[100px] font-[degular] font-bold  h-[35px]">
          Export list
          <img src={download} alt="download" />
        </button>
        <Modal isOpen={isOpenModal} onClose={closeModal}/>
      </div>
    </div>
    <div className="w-full border-t mt-4 border-gray-300" />
    <TransactionList/>
  </div>
  )
}

export default Transaction