import React, { useState } from "react";
import QueryForm from "../components/QueryForm";
import ResultDisplay from "../components/ResultDisplay";

function QueryPage() {
  const [result, setResult] = useState(null);

  const handleSubmit = (data) => {
    console.log("Submitted Data: ", data);
    // Send data to backend (mocked for now)
    setResult({
      destinations: ["Pokhara", "Kathmandu"],
      message: "Enjoy your trip with these recommendations!"
    });
  };

  return (
    <div>
      <h2>Plan Your Trip</h2>
      <QueryForm handleSubmit={handleSubmit} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default QueryPage;
