import React from "react";
import AddCoin from "../Components/AddCoin";
import CoinList from "../Components/Coinlist";

const CoinSummaryPage = () => {
    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
            <AddCoin/>
            <CoinList />
        </div>
    )
}

export default CoinSummaryPage