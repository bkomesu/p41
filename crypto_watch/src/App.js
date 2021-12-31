import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./Components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<CoinSummaryPage />} />
            <Route exact path="/coins/:id" element={<CoinDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
