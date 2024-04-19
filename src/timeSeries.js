import {getTime} from "./index";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import "./graph.css";

function TimeSeriesChart() {
  var optionsT = {
    grid: {
      show: false,
      //borderColor: '#000000',
  },
  stroke: {
    colors: "#000000",
    curve: 'straight',
    width: 1,
  },
  
  tooltip: {
    enabled: false,
  
  },
  elements: {
    point: {
      radius: 0
    }
  },
  chart: {
    id: 'timeSeries',
    type: 'line',
    animations: {
      enabled: false
    },
    responsive: false,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'numeric',
    labels: {
      show: false
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#000000',
  },
  title: {
    text: "[µs]",
    rotate: -0,
    offsetX: 0,
    offsetY: -0,
    style: {
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 500,
        color: 'black'
        // cssClass: 'apexcharts-yaxis-title',
    },
},
    show: true,
    max: 100,
    min: 0,
    decimalsInFloat: 2,
          labels: {
            style: {
              colors: "black"
            }
          }
  },
  legend: {
    show: false
  },
  }
  let seriesData = getTime();
  if (seriesData[0] === undefined) {
    seriesData[0] = seriesData[1];
  }
  let series = [{
    name: 'timeSeries',
    data: seriesData,
  },];
  ApexCharts.exec('timeSeries', 'updateSeries', [{
    data: seriesData
  }]);
  return (
    <div className="chart">
      <ReactApexChart className="chart" options={optionsT} series={series} type='line' height={"100%"}/>
      
  </div>
  );

}

export default TimeSeriesChart;
