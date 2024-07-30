import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  
  async function getTopCoinsInfo() {
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers')
      const coinsData = await response.json();
      // console.log(coinsData);
      setCoins(coinsData.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTopCoinsInfo();
  },[])

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.slice(0, 20).map(({id, name, symbol, rank, price_usd}) => (
          <CoinCard 
            id={id}
            name={name}
            symbol={symbol}
            rank={rank}
            price={price_usd}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
