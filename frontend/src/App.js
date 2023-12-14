import React from "react";
import { Route, Routes } from "react-router-dom";
import TopStocks from "./TopStocks/TopStocks";
import Main from "./components/Main";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gainers" element={<TopStocks />} />
      </Routes>
    </>
  );
}

export default Root;
