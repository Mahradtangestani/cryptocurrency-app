import React from 'react';

const CoinItem = ({coins}) => {
    return (
        <div className='text-gray-50 bg-slate-800 max-w-[1350px] flex flex-wrap items-center justify-between shadow-lg rounded-lg lg:mx-4 my-8 py-3 px-6 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <p>{coins.market_cap_rank}</p>
            <div className='flex items-center gap-x-2 w-auto'>
                <img src={coins.image} className='w-[40px]' alt="" />
                <p>{coins.symbol.toUpperCase()}</p>
            </div>
            <p className='text-blue-200'>${coins.current_price.toLocaleString()}</p>
            <p className='lg:block hidden'>{coins.price_change_percentage_24h.toFixed(2)}</p>
            <p className='lg:block hidden'>${coins.total_volume.toLocaleString()}</p>
            <p className='lg:block hidden'>{coins.market_cap.toLocaleString()}</p>
        </div>
    );
}

export default CoinItem;
