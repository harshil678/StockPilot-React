import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketChart } from "@/State/Coin/Action";

const StockChart = ({ coinId }) => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);

  const series = [
    {
      data: coin.marketChart.data,
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickamount: 6,
    },
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      strokeWidth: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      size: 0,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    colors: ["#788AA2"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Daily",
      lable: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly",
      lable: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly",
      lable: "1 Month",
      value: 30,
    },
    {
      keyword: "DIGITAL_CURRENCY_YEARLY",
      key: "Yearly",
      lable: "1 Year",
      value: 365,
    },
  ];

  const [activeLable, setActiveLable] = useState(timeSeries[0]);

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };

  useEffect(() => {
    dispatch(fetchMarketChart({ coinId, days: activeLable.value }));
  }, [dispatch, coinId, activeLable]);

  return (
    <>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable.lable == item.lable ? "default" : "outline"}
            className="rounded-full"
            key={item.lable}
            onClick={() => handleActiveLable(item)}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={"550"}
        />
      </div>
    </>
  );
};

export default StockChart;
