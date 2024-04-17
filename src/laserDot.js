import {getLaser} from "./index";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import "./graph.css";

function LaserDotChart() {
  var optionsT = {
    grid: {
      show: true,
      borderColor: '#00000010',
      opacity: 1,
      xaxis: {
        lines: {
            show: true
        },
    },   
    yaxis: {
        lines: {
            show: true,
        }
    },  
  },
  stroke: {
    colors: "#000000",
    curve: 'straight',
    width: 2,
  },
  
  tooltip: {
    enabled: false,
  
  },
  markers: {
    size: 5,
    colors: "#ff0000",
    strokeColors: '#ff0000',
    shape: "square"
  },
  // elements: {
    
  //   point: {
  //     radius: 1
  //   }
  // },
  chart: {
    id: 'laserChart',
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
      show: true
    },
    axisBorder: {
      show: true,
      color: '#000000',
  },
    max: 2,
    min: -2,
    tickAmount: 10,
    decimalsInFloat: 2,
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#000000',
    },
    // title: {text: "[mm]", style:{color:"#000000"}},
    tickAmount: 10,
    show: true,
    max: 2,
    min: -2,
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
  let seriesData = getLaser();
  let series = [{
    name: 'laserChart',
    data: [{
    x: seriesData[0],
    y: seriesData[1],
    }]
  },];
  ApexCharts.exec('laserChart', 'updateSeries', [{
    data: [{
      x: seriesData[0],
      y: seriesData[1],
      }]
  }]);
  return (
    <div className="chart" id="laser">

    <div id="inner">
      <ReactApexChart className="charti" options={optionsT} series={series} type='line' height={"100%"}/>
      </div>

  </div>
  );

}

export default LaserDotChart;
