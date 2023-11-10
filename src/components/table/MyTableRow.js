import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const MyTableRow = ({ symbol }) => {
  const [lastPrice, setLastPrice] = useState(symbol.last_price);
  const [low, setLow] = useState(symbol.low);
  const [high, setHigh] = useState(symbol.high);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/pubticker/${symbol.symbol}`);
        setLastPrice(response.data.last_price);
        setLow(response.data.low);
        setHigh(response.data.high);
      } catch (error) {
        console.error(`Error fetching data for ${symbol.symbol}:`, error);
      }
    };

    const intervalId = setInterval(fetchData, 6000);

    return () => clearInterval(intervalId);
  }, [symbol.symbol]);

  return (
    <tr>
      <td>
        <Link to={`/details/${symbol.symbol}`}>
          {symbol.symbol.toUpperCase()}
        </Link>
      </td>
      <td>{parseFloat(lastPrice).toFixed(5)}</td>
      <td>{parseFloat(lastPrice - low).toFixed(5)}</td>
      <td>{parseFloat(((lastPrice - low) / low) * 100).toFixed(5)}%</td>
      <td style={{ backgroundColor: "#76e872" }}>
        {parseFloat(high).toFixed(5)}
      </td>
      <td style={{ backgroundColor: "#e87272" }}>
        {parseFloat(low).toFixed(5)}
      </td>
    </tr>
  );
};

export default MyTableRow;
