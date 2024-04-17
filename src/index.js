import React/*, { Component } */ from 'react';
import ReactDOM from 'react-dom/client';
//import Chart from 'react-apexcharts';
import './index.css';
//import App from './App';

import reportWebVitals from './reportWebVitals';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import deblobData from './receivedData';
import { getElementError } from '@testing-library/react';

import mqtt from "mqtt"; // import namespace "mqtt"

import dfkiLogo from "./dfkiLogo.jpg"
import GHUB from "./6GHUB.png"

import TimeSeriesChart from './timeSeries';
import LaserDotChart from './laserDot';
import Slideshow from './slide';

import exImg from './imgTag.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
let ws;
const reader = new FileReader();
let seriesData = new Array(200).fill(0);




// function startMQTT() {
  //var client = mqtt.connect("mqtt://test.mosquitto.org:8080"); // create a client
  var client = mqtt.connect("ws://127.0.0.1:8080");

client.on("connect", () => {
  client.subscribe(["gui", "buttons", "jitter"], (err) => {
    client.on("message", (topic, message) => {
      // message is Buffer
      if(topic == "gui"){
        //console.log(message);
      }
      else if(topic == "buttons") {

      }
      else if(topic == "jitter") {

      }
      console.log(topic.toString() +":"+ message.toString());
      // client.end();
    });
    if (!err) {
        // client.publish("gui", "Hello mqtt");
    }
  });
});
// }

let data=[0,0];




export function getTime() {
  return seriesData;
}
export function getLaser() {
  return data;
}
function buttonClick(e) {
  client.publish("buttons", e.target.value.toString());
}

//ONLY FOR SIMULATING DATA STREAM:
// setInterval(() => {
//   simulateData();
// }, 30);
// function simulateData() {
//  seriesData.shift();
//  seriesData.push((-100+Math.round(Math.random()*200))); 
//  ApexCharts.exec('timeSeries', 'updateSeries', [{
//   data: seriesData
// }]);
// }

setTimeout(()=>{
  setInterval(() => {
    data = [-1+Math.round(Math.random()*20)/10, -1+Math.round(Math.random()*20)/10];
    root.render(<Main />);
  }, 100);
},1000)

class Main extends React.Component {
  render() {
    return (
      <div id="outsideDiv">
        <div id="outsideFlex">
          <div id="leftInfo">
            <div id="flexLeft">
              <img src={dfkiLogo}  className="image"></img>
              <img src={GHUB}  className="image"></img>
              <button value="1" className="bigButtons" onClick={buttonClick}>Start</button>
              <button value="0" className="bigButtons" onClick={buttonClick}>Stopp</button>
              <button value="2" className="bigButtons" onClick={buttonClick}>Reset</button>
              <button value="3" className="bigButtons" onClick={buttonClick}>Demo</button>
            </div>
          </div>
          <div id="bigData">
            <div id="bigTop">

            </div>
            <div id="bigBottom">
            <Slideshow />
            </div>
          </div>
          <div id="rightSide">
            <div id="rightTop">
              <LaserDotChart />
            </div>
            <div id="rightBottom"> 
              <div id="chartDiv">
              <TimeSeriesChart />
              {/* <ReactApexChart class="chart" options={seriesOptions} series={series} type='line' height={"100%"}/> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}




root.render(<Main />)

