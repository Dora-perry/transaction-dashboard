import { useState } from "react"
import React from 'react'

const TransactionStatus = ({transactionStatusList, setTransactionStatus}) => {
    const [isStatusChecked, setIsStatusChecked] = useState([true, true, true]);

    const handleCheckboxChange = (index, transactionStatusType) => {
      const newCheckedStatus = [...isStatusChecked];
      newCheckedStatus[index] = !newCheckedStatus[index];
      setIsStatusChecked(newCheckedStatus);
      if (!newCheckedStatus[index]) {
        const updateList = transactionStatusList.filter(item => item !== transactionStatusType);
       
        setTransactionStatus(updateList)
            
  
      } else {
        setTransactionStatus(prevList => [...prevList, transactionStatusType]);
      }
      
    };  
  return (
    <div className=' w-[330px] px-2 py-3 z-50 top-[47%] absolute mb-2 rounded-[10px] shadow-md bg-white'>
    <div className='p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
      <input
        type="checkbox"
        checked={isStatusChecked[0]}
        id='successful'
        onChange={() => handleCheckboxChange(0, "Successful")}
        className='form-checkbox custom-checkbox'
      />
      <label htmlFor="successful" className='ml-2 text-[12px]'> Successful</label>
    </div>
    <div className=' p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
      <input
        type="checkbox"
        checked={isStatusChecked[1]}
        id='Pending'
        onChange={() => handleCheckboxChange(1,"Pending")}
        className='form-checkbox custom-checkbox bg-black'
      />
      <label htmlFor="Pending" className='ml-2 text-[12px]'>Pending</label>
    </div>
    <div className=' p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
      <input
        type="checkbox"
        checked={isStatusChecked[2]}
        id='failed'
        onChange={() => handleCheckboxChange(2, "Failed")}
        className='form-checkbox custom-checkbox'
      />
      <label htmlFor="failed" className='ml-2 text-[12px]'>Failed</label>
    </div>
    </div>
  )
}

export default TransactionStatus