import React from "react";

import MyTableRow from "./MyTableRow";

const MyTableBody = ({ data }) => (
  <tbody>
    {data.map((symbol, index) => (
      <MyTableRow key={index} symbol={symbol} />
    ))}
  </tbody>
);

export default MyTableBody;
