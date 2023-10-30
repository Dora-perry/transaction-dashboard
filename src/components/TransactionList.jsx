import React from 'react'
import callMade from '../assets/call_made.svg'
import callReceived from '../assets/call_received.svg'
import useRevenueData from '../hooks/useRevenueData'

const TransactionList = () => {
    const {data, loading} = useRevenueData('/transactions')
    console.log(data);

    
    
  return (
    <div className='mt-5'>
        {data.map((item, index)=>(
             item.metadata ? (
                <div key={item.payment_reference} className='flex justify-between mb-4'>
             <div className='flex gap-2'>
                 <span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#E3FCF2]'><img src={callReceived} alt="" /></span>
                 <div className=''>
                     <p className='text-[12px] mb-1'>{item.metadata.product_name ?item.metadata.product_name : "N/A" }</p>
                     <p className='text-[8px] text-[#56616B]'>{item.metadata.name}</p>
                 </div>
             </div>
              <div>
                 <p className='text-[12px] mb-1 font-bold'>USD {item.amount}</p>
                 <p className='text-[8px] text-[#56616B]'> {item.date}</p>
              </div>
         </div>
             ) : (<div className='flex justify-between mb-4'>
             <div className='flex gap-2'>
                 <span className='h-8 w-8 rounded-full flex items-center justify-center bg-[#F9E3E0]'><img src={callMade} alt="" /></span>
                 <div className=''>
                     <p className='text-[12px] mb-1'>{item.type}</p>
                     <p className='text-[8px] text-[#56616B]'>{item.status}</p>
                 </div>
             </div>
              <div>
                 <p className='text-[12px] mb-1 font-bold'>USD {item.amount}</p>
                 <p className='text-[8px] text-[#56616B]'>{item.date}</p>
              </div>
         </div>)
        ))}
       
    </div>
  )
}

export default TransactionList