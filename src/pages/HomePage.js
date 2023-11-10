import React, { useState, useEffect } from "react";
import axios from "axios";
import MyTable from "../components/table/MyTable";
const HomePage = () => {
  const [symbols, setSymbols] = useState([]);
  const [symbolsData, setSymbolsData] = useState([]);

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const response = await axios.get("/api/v1/symbols");
        setSymbols(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching symbols:", error);
      }
    };

    fetchSymbols();
  }, []);

  useEffect(() => {
    const fetchDataForSymbol = async (symbol) => {
      try {
        const response = await axios.get(`/api/v1/pubticker/${symbol}`);
        setSymbolsData((prevSymbols) => [
          ...prevSymbols,
          { symbol, ...response.data },
        ]);
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
      }
    };

    symbols.forEach((symbol) => {
      fetchDataForSymbol(symbol);
    });
  }, [symbols]);

  const tableHeaders = [
    "Name",
    "Last",
    "Change",
    "Change Percent",
    "High",
    "Low",
  ];

  return (
    <div className="home">
      <MyTable id="home" headers={tableHeaders} data={symbolsData} />
    </div>
  );
};

export default HomePage;
