import React from 'react';
import infoIcon from '../assets/info.svg';
import useRevenueData from '../hooks/useRevenueData';

const Revenue = () => {
    const { data, loading } = useRevenueData('/wallet');

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className=''>
            <div>
            <div className='flex flex-col mb-6'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[#56616B] text-[8px]'>Ledger Balance</span>
                    <div><img src={infoIcon} alt="info" /></div>
                </div>
                {data && (
                    <div className='text-[#131316] font-bold'> USD {data.ledger_balance?.toFixed(2)}</div>
                )}
            </div>
            <div className='flex flex-col w-48  mb-6'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[#56616B] text-[8px]'>Total Payout</span>
                    <div><img src={infoIcon} alt="info" /></div>
                </div>
                {data && (
                    <div className='text-[#131316] font-bold'> USD {data.total_payout?.toFixed(2)}</div>
                )}
            </div>
            <div className='flex flex-col w-48  mb-6'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[#56616B] text-[8px]'>Total Revenue</span>
                    <div><img src={infoIcon} alt="info" /></div>
                </div>
                {data && (
                    <div className='text-[#131316] font-bold'> USD {data.total_revenue?.toFixed(2)}</div>
                )}
            </div>
            <div className='flex flex-col w-48  mb-6'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-[#56616B] text-[8px]'>Pending Payout</span>
                    <div><img src={infoIcon} alt="info" /></div>
                </div>
                {data && (
                    <div className='text-[#131316] font-bold'> USD {data.pending_payout?.toFixed(2)}</div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Revenue;
