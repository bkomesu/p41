import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { historyOptions } from "../chartConfigs/chatrConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  let chartInstance = undefined;
  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174,305,194,0.5)",
              borderColor: "rgba(174, 305,194,0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">
            Current Value: ${detail.current_price.toFixed(2)}
          </p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            Percentage Change: {detail.price_change_percentage_24h.toFixed(2)}
            {"%"}
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>

      <div className="chart-button mt-1">
        <button
          onClick={() => {
            chartInstance.destroy();
            setTimeFormat("24h");
          }}
          className="btn btn-outline-secondary btn-sm"
        >
          {" "}
          24h{" "}
        </button>
        <button
          onClick={() => {
            chartInstance.destroy();
            setTimeFormat("7d");
          }}
          className="btn btn-outline-secondary btn-sm mx-1"
        >
          {" "}
          7d{" "}
        </button>
        <button
          onClick={() => {
            chartInstance.destroy();
            setTimeFormat("1y");
          }}
          className="btn btn-outline-secondary btn-sm"
        >
          {" "}
          1y{" "}
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;