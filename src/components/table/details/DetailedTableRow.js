import React from "react";

const DetailedTableRow = ({ symbol }) => (
  <tr>
    <td>{symbol.symbol.toUpperCase()}</td>
    <td>{symbol.last_price}</td>
    <td>{symbol.high}</td>
    <td>{symbol.low}</td>
  </tr>
);

export default DetailedTableRow;
