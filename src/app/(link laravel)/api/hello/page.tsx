import React, { useState, useEffect } from "react";

function HelloPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("127.0.0.1:8000/api/hello");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloPage;
