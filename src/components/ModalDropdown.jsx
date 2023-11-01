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
      // Add the transactionType to the list
      setTransactionList(prevList => [...prevList, transactionType]);
    }
    
  };
  console.log(transactionTypeList);


  return (
    <div className=' w-[330px] px-2 py-3 z-50 absolute mb-2 rounded-[10px] shadow-md bg-white'>
      <div className='p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[0]}
          id='storeTransactions'
          onChange={() => handleCheckboxChange(0, "Store Transactions")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="storeTransactions"> Store Transactions</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[1]}
          id='getTipped'
          onChange={() => handleCheckboxChange(1,"Get Tipped")}
          className='form-checkbox custom-checkbox bg-black'
        />
        <label htmlFor="getTipped"> Get Tipped</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[2]}
          id='withdrawals'
          onChange={() => handleCheckboxChange(2, "Withdrawals")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="withdrawals">Withdrawals</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[3]}
          id='chargebacks'
          onChange={() => handleCheckboxChange(3,"Chargebacks")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="chargebacks">Chargebacks</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[4]}
          id='cashbacks'
          onChange={() => handleCheckboxChange(4,"Cashbacks")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="cashbacks">Cashbacks</label>
      </div>
      <div className=' p-2 rounded-[7px] hover:bg-gray-100'>
        <input
          type="checkbox"
          checked={isChecked[5]}
          id='referEarn'
          onChange={() => handleCheckboxChange(5,"Refer & Earn")}
          className='form-checkbox custom-checkbox'
        />
        <label htmlFor="referEarn"> Refer & Earn </label>
      </div>
    </div>
  );
}

export default ModalDropdown;
