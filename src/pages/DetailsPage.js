import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLogIn } from "../hooks/useLogIn";
import { useFavoriteStatus } from "../hooks/useFavoriteStatus";
import MyTable from "../components/table/MyTable";
import FavoriteButton from "../components/FavoriteButton";
const DetailsPage = () => {
  let { symbol } = useParams();
  const { isLoggedIn } = useLogIn();

  const [symbolData, setSymbolData] = useState(null);

  const { favoriteSymbols, toggleFavoriteSymbol } = useFavoriteStatus();

  useEffect(() => {
    const fetchDataForSymbol = async (symbol) => {
      try {
        const response = await axios.get(`/api/v1/pubticker/${symbol}`);
        setSymbolData(() => [{ symbol, ...response.data }]);
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
      }
    };

    fetchDataForSymbol(symbol);
  }, [symbol]);

  if (!symbolData) {
    return <div>Loading...</div>;
  }

  const tableHeaders = ["Name", "Last", "High", "Low"];

  const handleToggleFavorite = () => {
    toggleFavoriteSymbol(symbol);
  };

  return (
    <div className="details">
      <MyTable id="details" headers={tableHeaders} data={symbolData} />
      <FavoriteButton
        isLoggedIn={isLoggedIn}
        handleToggleFavorite={handleToggleFavorite}
        favoriteSymbols={favoriteSymbols}
        symbol={symbol}
      ></FavoriteButton>
    </div>
  );
};

export default DetailsPage;
