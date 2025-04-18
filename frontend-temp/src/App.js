import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [serverTime, setServerTime] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setServerTime(response.data.now);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Could not connect to backend");
      }
    };  

    fetchServerTime();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Express + PostgreSQL</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : serverTime ? (
        <p>📅 Server Time: {new Date(serverTime).toString()}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
