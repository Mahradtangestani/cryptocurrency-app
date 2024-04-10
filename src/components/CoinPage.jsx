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
                </div>
            ) : null}
        </div>
    );
}

export default CoinPage;
