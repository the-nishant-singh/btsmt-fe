import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { getchartsData } from '../../../../actions/charts';
import './chart.css';

const Chart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      getchartsData((type, response) => {
        if(type === 'success') {
          setData([ ...response.data ])
        }
      })
    }, [])
    
    const chartOptions = {
        chart: {
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    return (
        <div className='chart_wrapper'>
            <ReactApexChart width="100%" height="100%" options={chartOptions} series={data} />
        </div>
    );
}

export default Chart;
