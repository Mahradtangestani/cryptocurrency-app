import React, { useEffect, useState } from 'react';
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import { IoArrowBackCircleOutline } from "react-icons/io5";

const CoinPage = () => {

    const [coin , setCoin] = useState({})

    const navigate = useNavigate()
    
    const params = useParams()
    
    const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    
    const handleNavigate = ()=>{
        navigate("/")
    }

    useEffect(()=>{
        axios.get(URL)
        .then((res)=>{
            setCoin(res.data)
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    } , [])
    
    return (
        <div>
            <div className='flex sm:justify-center lg:justify-start mt-5'>
                <p className='bg-slate-700 text-white font-bold p-2 rounded-lg cursor-pointer flex items-center gap-x-3' onClick={handleNavigate}>BACK <IoArrowBackCircleOutline className='text-2xl'/></p>
            </div>
            {coin.market_data ? (
                <div className='max-w-[868px] mx-auto mt-16'>
                    <div className='bg-slate-800 py-6 shadow-lg rounded-lg'>
                        <h1 className='text-3xl font-semibold text-center text-white'>{coin.name}</h1>
                    </div>
                    <div className='bg-slate-800 py-6 shadow-lg rounded-lg mt-12 px-4'>
                        <div>
                            <span className='text-white bg-[#F3BA2F] rounded-sm border-4 border-[#Fab913] py-1 px-2'>Rank # {coin.market_cap_rank}</span>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className='text-white flex items-center justify-center gap-x-4'>
                                {
                                    coin.image ? (
                                        <img src={coin.image.small} alt="" />
                                    ) : null
                                }
                                <p className='text-lg'>{coin.name}</p>
                                {
                                    coin.symbol ? (
                                        <p className='text-[#F3BA2F] text-sm'>{coin.symbol.toUpperCase()}</p>
                                    ) : null
                                }
                            </div>
                            <div>
                                <h1 className='text-white text-3xl font-semibold'>${coin.market_data.current_price.usd}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-800 shadow-lg rounded-lg w-full mt-12 text-center py-3'>
                        <table className='w-full my-2'>
                            <thead>
                                <tr className='text-white'>
                                    <th className='py-3'>1H</th>
                                    <th className='py-3'>24H</th>
                                    <th className='py-3'>7D</th>
                                    <th className='py-3'>14D</th>
                                    <th className='py-3'>30D</th>
                                    <th className='py-3'>1Y</th>
                                </tr>
                            </thead>
                            <tbody className='text-gray-100 text-center'>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                                    <td>
                                        {
                                            coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)
                                        } %
                                    </td>
                            </tbody>
                        </table>
                    </div>
                    <div className='bg-slate-800 text-white rounded-lg shadow-lg py-5 px-4 mt-1'>
                            <div className='flex lg:flex-row flex-col justify-between lg:gap-x-12 lg:gap-y-0 gap-y-4'>
                                <div className='flex lg:flex-row flex-col justify-between lg:w-1/2 w-full lg:gap-y-0 gap-y-4'> 
                                    <div className='flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b'>
                                        <h4 className='font-semibold'>
                                            24 Hour Low
                                        </h4>
                                        <p>${coin.market_data.low_24h.usd}</p>
                                    </div>
                                    <div className='flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b lg:mt-0 mt-8'>
                                        <h4 className='font-semibold'>
                                            24 Hour High
                                        </h4>
                                        <p>${coin.market_data.high_24h.usd}</p>
                                    </div>
                                </div>  
                                <div className='flex lg:flex-row flex-col justify-between lg:w-1/2 w-full lg:gap-y-0 gap-y-4'> 
                                    <div className='flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b'>
                                        <h4 className='font-semibold'>
                                            Market Cap
                                        </h4>
                                        <p>${coin.market_data.market_cap.usd}</p>
                                    </div>
                                    <div className='flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:mt-0 mt-8'>
                                        <h4 className='font-semibold'>
                                            Circulating Supply
                                        </h4>
                                        <p>${coin.market_data.circulating_supply.usd}</p>
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='bg-slate-800 py-6 shadow-lg rounded-lg mt-12 px-4'>
                        <div>
                            <h3 className='text-white font-semibold text-xl'>About</h3>
                            {coin.description ? (
                                <p className='text-gray-300 mt-4'>{coin.description.en}</p>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : (
                

                <button disabled type="button" className="mt-12 py-2.5 px-5 me-2 text-xl font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Loading...
                </button>

            )}
        </div>
    );
}

export default CoinPage;
