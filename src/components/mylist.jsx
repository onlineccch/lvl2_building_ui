// Basic Example
import React from "react";

const MyList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default MyList;
