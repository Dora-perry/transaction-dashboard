import React from 'react'
import line from '../assets/Line.png'
import useRevenueData from '../hooks/useRevenueData';

const Charts = () => {
    const { data, loading } = useRevenueData('/wallet');
    const { balance} = data;


    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
          <div className="flex gap-16 items-center">
            <div className="flex flex-col gap-2">
              <p className="text-gray-600  text-[8px]">Available Balance</p>
              <p className="text-neutral-900 text-[24px] font-bold">USD{balance}</p>
            </div>
            <button className="bg-neutral-900 w-[120px] text-white px-4 py-2 font-semibold rounded-full text-[14px]">Withdraw</button>
          </div>
          <div className="pt-20 flex flex-col gap-4">
            <img src={line} alt="line" />
            <div className="flex flex-col gap-2">
              <div className="w-full border-t border-gray-300" />
              <div className="flex justify-between font-[degularmedium] text-base text-gray-600">
                <p className='text-[12px]' >Apr 1 , 2022</p>
                <p  className='text-[12px]'>Apr 30 , 2022</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Charts