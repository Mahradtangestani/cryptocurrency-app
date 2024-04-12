import React, { useEffect, useState } from 'react';
import axios from "axios"
import {useParams} from "react-router-dom"

const CoinPage = () => {

    const [coin , setCoin] = useState({})
    
    const params = useParams()
    
    const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

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
            ) : null}
        </div>
    );
}

export default CoinPage;
