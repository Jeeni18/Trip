import React from "react";

function ResultDisplay({ result }) {
  return (
    <div>
      <h3>Recommended Destinations:</h3>
      <ul>
        {result.destinations.map((dest, index) => (
          <li key={index}>{dest}</li>
        ))}
      </ul>
      <p>{result.message}</p>
    </div>
  );
}

export default ResultDisplay;
