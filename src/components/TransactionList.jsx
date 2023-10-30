import React from 'react'
import callMade from '../assets/call_made.svg'
import callReceived from '../assets/call_received.svg'
import useRevenueData from '../hooks/useRevenueData'

const TransactionList = () => {
    const {data, loading} = useRevenueData('/transactions')
    console.log(data);

    const info =  {
        "amount": 500,
        "metadata": {
          "name": "John Doe",
          "type": "digital_product",
          "email": "johndoe@example.com",
          "quantity": 1,
          "country": "Nigeria",
          "product_name": "Rich Dad Poor Dad"
        },
        "payment_reference": "c3f7123f-186f-4a45-b911-76736e9c5937",
        "status": "successful",
        "type": "deposit",
        "date": "2022-03-03"
      }
    
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