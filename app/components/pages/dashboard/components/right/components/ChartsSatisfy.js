 import React from 'react';
// import {NavLink} from 'react-router-dom';
// import ListStatus from './ListStatus'
// import ReactSpeedometer from "react-d3-speedometer";
// class Comment extends React.Component{
// 	render () {
//   	return (
//       <div className="comment col-md-12 module" >
//             <ReactSpeedometer
//             value={55}
//             maxValue={100}
//             needleColor="#002864"
//             startColor="#ff0000"
//             segments={10}
//             endColor="#4e7ea9"
//             textColor="#0092f1"
//             needleTransitionDuration={100}
//             needleTransition="easeElastic"
//             currentValueText="Chỉ số hài lòng: ${value}"
//             />

//               </div>
//     );
//   }
// }



// module.exports =  Comment;
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  "chart": {
    "caption": "Walmart's Customer Satisfaction Score",
    "subcaption": "2017",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": "fusion"
  },
  "colorrange": {
    "color": [
      {
        "minvalue": "0",
        "maxvalue": "50",
        "code": "#F2726F"
      },
      {
        "minvalue": "50",
        "maxvalue": "75",
        "code": "#FFC533"
      },
      {
        "minvalue": "75",
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "71",
        "tooltext": "<b>9%</b> lesser that target"
      }
    ]
  },
  "trendpoints": {
    "point": [
      {
        "startvalue": "80",
        "displayvalue": "Target",
        "thickness": "2",
        "color": "#E15A26",
        "usemarker": "1",
        "markerbordercolor": "#E15A26",
        "markertooltext": "80%"
      }
    ]
  }
};

class MyComponent extends React.Component {
   render() {
      return (
      <ReactFusioncharts
         type = "angulargauge"
         width = '100%'
         height = '100%'
         dataFormat = "JSON"
         dataSource = {dataSource} />
      );
   }
}

module.exports = MyComponent
