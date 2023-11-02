import React, { useState } from 'react';
import './style.css';

const ModalDropdown = ({transactionTypeList, setTransactionList}) => {
  const [isChecked, setIsChecked] = useState([true, true, true, true, true, true]);

  const handleCheckboxChange = (index, transactionType) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !newCheckedState[index];
    setIsChecked(newCheckedState);
    if (!newCheckedState[index]) {
      const updatedList = transactionTypeList.filter(item => item !== transactionType);
     
      setTransactionList(updatedList)
          

    } else {
      setTransactionList(prevList => [...prevList, transactionType]);
    }
    
  };
  console.log(transactionTypeList);
  console.log(setTransactionList);


  return (
    <div className=' w-[330px] px-2 py-3 z-50 absolute mb-2 rounded-[10px] shadow-md bg-white'>
      <div className='p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[0]}
          id='storeTransactions'
          onChange={() => handleCheckboxChange(0, "Store Transactions")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="storeTransactions" className='ml-2 text-[12px]'> Store Transactions</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[1]}
          id='getTipped'
          onChange={() => handleCheckboxChange(1,"Get Tipped")}
          className='form-checkbox custom-checkbox bg-black'
        />
        <label htmlFor="getTipped" className='ml-2 text-[12px]'> Get Tipped</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[2]}
          id='withdrawals'
          onChange={() => handleCheckboxChange(2, "Withdrawals")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="withdrawals" className='ml-2 text-[12px]'>Withdrawals</label>
      </div>
      <div className='p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[3]}
          id='chargebacks'
          onChange={() => handleCheckboxChange(3,"Chargebacks")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="chargebacks" className='ml-2 text-[12px]'>Chargebacks</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[4]}
          id='cashbacks'
          onChange={() => handleCheckboxChange(4,"Cashbacks")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="cashbacks" className='ml-2 text-[12px]'>Cashbacks</label>
      </div>
      <div className='p-2 rounded-[7px] hover:bg-[#EFF1F6] flex items-center'>
        <input
          type="checkbox"
          checked={isChecked[5]}
          id='referEarn'
          onChange={() => handleCheckboxChange(5,"Refer & Earn")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="referEarn" className='ml-2 text-[12px]'> Refer & Earn </label>
      </div>
    </div>
  );
}

export default ModalDropdown;
