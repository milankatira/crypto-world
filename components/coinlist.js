import React from "react";
import Coins from "./coins";

const coinlist = ({ filteredCoins }) => {
  return (
    <>
      {filteredCoins.map((coin) => (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            symbol={coin.symbol}
            price={coin.current_price}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        )
      )}
    </>
  );
};

export default coinlist;
