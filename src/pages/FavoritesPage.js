import React, { useState, useEffect } from "react";
import { useFavoriteStatus } from "../hooks/useFavoriteStatus";
import axios from "axios";
import MyTable from "../components/table/MyTable";
const FavoritesPage = () => {
  const { favoriteSymbols } = useFavoriteStatus();
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    const fetchDataForFavorite = async (symbol) => {
      console.log(symbol);
      try {
        const response = await axios.get(`/api/v1/pubticker/${symbol}`);

        setFavoriteData((prevData) => {
          console.log(prevData);
          if (prevData.find((elem) => elem.symbol === symbol)) {
            return [...prevData];
          }
          return [...prevData, { symbol, ...response.data }];
        });
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
      }
    };

    favoriteSymbols.forEach((symbol) => {
      fetchDataForFavorite(symbol);
    });
  }, [favoriteSymbols]);
  console.log(favoriteData);
  const tableHeaders = [
    "Name",
    "Last",
    "Change",
    "Change Percent",
    "High",
    "Low",
  ];

  return (
    <div className="favorites">
      <MyTable id="favorites" headers={tableHeaders} data={favoriteData} />
    </div>
  );
};

export default FavoritesPage;
