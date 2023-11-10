import React from "react";
import DetailedTableRow from "./DetailedTableRow";

const DetailedTableBody = ({ data }) => (
  <tbody>
    {data.map((symbol, index) => (
      <DetailedTableRow key={index} symbol={symbol} />
    ))}
  </tbody>
);

export default DetailedTableBody;
