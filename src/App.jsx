import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import CoinList from "./components/CoinList";
import CoinPage from "./components/CoinPage";

function App() {
  const [coin, setCoin] = useState([]);

  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-slate-400">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinList coins={coin} />} />
        <Route path="/coin" element={<CoinPage/>}>
            <Route path=":coinId" element={<CoinPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
