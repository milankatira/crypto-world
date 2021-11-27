import React from "react";
import Coinlist from "../components/coinlist";
import Layout from "../components/Layout";
import SearchBar from "../components/Searchbar";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = React.useState("");

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar placeholder="Search" onChange={handleChange} />
        <Coinlist filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
