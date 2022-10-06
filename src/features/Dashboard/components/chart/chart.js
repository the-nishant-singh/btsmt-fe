import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getchartsData } from "../../../../actions/charts";
import "./chart.css";

const Chart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getchartsData((type, response) => {
      if (type === "success") {
        const data = [];
        response.data.map((item) => {
          const cur = [];
          item.data.map((e, i) => {
            const d = new Date();
            d.setHours(d.getHours() + i);
            cur.push({ y: e, x: d.getTime() });
          });
          data.push({ name: item.name, data: cur });
        });
        console.log(data);
        setData([...data]);
      }
    });
  }, []);

  const chartOptions = {
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };
  return (
    <div className="chart_wrapper">
      <ReactApexChart
        width="100%"
        height="100%"
        options={chartOptions}
        series={data}
        type="area"
      />
    </div>
  );
};

export default Chart;
