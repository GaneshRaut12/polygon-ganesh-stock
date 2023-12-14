import React from "react";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Learn from "./components/Learn/Learn";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
