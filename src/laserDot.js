import {getLaser} from "./index";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import "./graph.css";

function LaserDotChart() {
  var optionsT = {
    grid: {
      show: true,
      // borderColor: '#00000010',
      borderColor: '#111',
      strokeDashArray: 1,
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
    shape: "circle"
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
    title: {
      text: "Offset X [mm]",
      rotate: -0,
      offsetX: 145,
      offsetY: -5,
      style: {
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 500,
          color: 'black'
          // cssClass: 'apexcharts-yaxis-title',
      },
    },
    floating: false,
    type: 'numeric',
    labels: {
      show: true,
      style: {
        fontSize: '13px'
      },
    },
    axisBorder: {
      show: false,
      color: '#000000',
  },
    max: 16,
    min: -16,
    tickAmount: 16,
    decimalsInFloat: 0,
  },

  yaxis: {
    axisBorder: {
      show: false,
      color: '#000000',
    },

    title: {
      text: "Offset Y [mm]",
      rotate: -90,
      offsetX: 0,
      offsetY: -140,
      style: {
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 500,
          color: 'black'
          // cssClass: 'apexcharts-yaxis-title',
      },
  },
    tickAmount: 16,
    show: true,
    max: 16,
    min: -16,

    decimalsInFloat: 0,
          labels: {
            style: {
              fontSize: '13px',
              color: '#000000'
            },
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
