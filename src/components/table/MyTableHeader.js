import React from "react";

const MyTableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  </thead>
);

export default MyTableHeader;
