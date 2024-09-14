import React from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem';
import CoinPage from './CoinPage';


const CoinList = ({coins}) => {

    
    return (
        <div className='lg:max-w-[1280px] max-w-[90%] w-full mx-auto mt-8'>
            <div>
                <div className='text-gray-50 flex items-center justify-between shadow-lg rounded-lg mx-4 my-2 font-bold px-6 py-4 bg-slate-600'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24H</p>
                    <p className='lg:block hidden'>Volume</p>
                    <p className='lg:block hidden'>Market Cap</p>
                </div>
            </div>
            {
                coins.map((coin , index)=>{
                    return (
                        <Link to={`/coin/${coin.id}`} element={<CoinPage/>} key={index}>
                            <CoinItem coins={coin} key={index}/>
                        </Link>
                        
                    ) 
                })
            }
        </div>
    );
}

export default CoinList;
