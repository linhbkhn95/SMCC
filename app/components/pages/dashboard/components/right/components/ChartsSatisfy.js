 import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListPost'
import Chart from 'react-google-charts'

import ReactSpeedometer from "react-d3-speedometer";
class ChartSatify extends React.Component{
	render () {
  	return (
      <div className="comment col-md-12 module" >
         <div className="chart-gauge">
            {/* <ReactSpeedometer
            value={55}
            maxValue={100}
            needleColor="#002864"
            startColor="#ff0000"
            segments={12}

            height={150}
            endColor="#4e7ea9"
            textColor="white"
            needleTransitionDuration={100}
            ringWidth={50}
            needleTransition="easeElastic"
            currentValueText="Chỉ số hài lòng: ${value}"
            /> */}
<Chart
// width={600}
height={200}
chartType="Gauge"
className="title"
loader={<div>Loading Chart</div>}
data={[
  ['Label', 'Value'],
  ['Mức độ nóng', 65],

]}

options={

  {
    title: {
      text: 'Speedometer'
  },
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF',
     fontFamily: 'Maven Pro',
    fontSize: '10',
    fontName:'Maven Pro',
    float:'left',
    fontWeight:"normal",

   },
   hAxis: {
    format: 'decimal',
    textStyle: {
      color: "#0092f1",
      fontFamily: 'Maven Pro',
      fontName:'Maven Pro',
      fontSize: '10'
    },
    gridlines: {
      color: "#0092f1"
    },
     baselineColor: '#002864'
  },
  vAxis: {
      textStyle: {
    color: "#FFFFFF",
    fontFamily: 'Maven Pro',
    fontName:'Maven Pro',
    fontSize: '10'
      },
    gridlines: {
      color: "#fffff"
    },
    baselineColor: '#fffff',

  } ,

   bar: { groupWidth: '65%' },
   legend: { position: 'none' },
    backgroundColor: '#002864',
  greenFrom: 75,
  greenTo: 100,
  blueFrom: 25,
  blueTo:50,
  yellowFrom:50,
  yellowTo: 75,
  redFrom: 0,
  redTo: 25,
  minorTicks: 2,
  blueColor:"#ff6900",
  greenColor: '#0092f1',
  yellowColor: '#ffbb00',
  redColor: '#ff0000',
}}
rootProps={{ 'data-testid': '1' }}
/>
        </div>
       </div>
    );
  }
}

module.exports = ChartSatify

// module.exports =  Comment;
// import fusioncharts from 'fusioncharts';
// import charts from 'fusioncharts/fusioncharts.charts';
// import ReactFusioncharts from 'react-fusioncharts';

// // Resolves charts dependancy
// charts(FusionCharts);

// const dataSource = {
//   "chart": {
//     "caption": "Nordstorm's Customer Satisfaction Score for 2017",
//     "lowerlimit": "0",
//     "upperlimit": "100",
//     "showvalue": "1",
//     "numbersuffix": "%",
//     "theme": "fusion",
//     "showtooltip": "0"
//   },
//   "colorrange": {
//     "color": [
//       {
//         "minvalue": "0",
//         "maxvalue": "50",
//         "code": "#F2726F"
//       },
//       {
//         "minvalue": "50",
//         "maxvalue": "75",
//         "code": "#FFC533"
//       },
//       {
//         "minvalue": "75",
//         "maxvalue": "100",
//         "code": "#62B58F"
//       }
//     ]
//   },
//   "dials": {
//     "dial": [
//       {
//         "value": "81"
//       }
//     ]
//   }
// };

// class MyComponent extends React.Component {
//    render() {
//       return (
//       <ReactFusioncharts
//          type = "angulargauge"
//          width = '100%'
//          height = '100%'
//          dataFormat = "JSON"
//          dataSource = {dataSource} />
//       );
//    }
// }
// module.exports = MyComponent
