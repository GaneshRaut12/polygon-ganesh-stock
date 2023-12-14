import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/top-20');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const calculateGainers = () => {
    if (!data) return [];
    
    data.results.forEach(stock => {
      stock.gain = stock.c - stock.o;
    });

    return data.results
      .slice()
      .sort((a, b) => b.gain - a.gain)
      .slice(0, 20);
  };

  const topGainers = calculateGainers();

  return (
    <div>
      <h1>Top 20 Gainers Today</h1>
      {topGainers.length > 0 ? (
        <ul>
          {topGainers.map((stock) => (
            <li key={stock.T}>
              {stock.T} - Gain: {stock.gain}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
