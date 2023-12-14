import React, { useState, useEffect } from 'react';
import './TopStocks.css'; // Import a CSS file for styling

const TopStocks = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/top-20');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 20000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  const calculateGainers = () => {
    if (!data) return [];

    // Calculate the gain for each stock and add it as a new property
    data?.results?.forEach(stock => {
      stock.gain = (stock.c - stock.o).toFixed(3);
    });

    // Sort stocks based on gains and slice to get the top 20
    return data?.results?.slice()
      .sort((a, b) => b.gain - a.gain)
      .slice(0, 20);
  };

  const topGainers = calculateGainers();

  return (
    <div className="top-stocks-container">
      <h1 className="header">Top 20 Gainers Today</h1>
      {topGainers?.length > 0 ? (
        <ul className="stock-list">
          {topGainers.map((stock) => (
            <li key={stock.T} className="stock-item">
              <span className="stock-name">{stock.T}</span>
              <div className="stock-details">
                <h5 style={{ color: "darkblue" }}>Open Price: {stock.o.toFixed(3)}</h5>
                <h5 style={{ color: "red" }}>Current Price: {stock.c.toFixed(3)}</h5>
                <div className={`gain ${stock.gain >= 0 ? 'positive' : 'negative'}`}>
                  Gain: {stock.gain}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default TopStocks;
