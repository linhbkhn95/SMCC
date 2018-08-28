 import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import ReactSpeedometer from "react-d3-speedometer";
class ChartSatify extends React.Component{
	render () {
  	return (
      <div className="comment col-md-12 module" >
         <div className="chart-gauge">
            <ReactSpeedometer
            value={55}
            maxValue={100}
            needleColor="#002864"
            startColor="#ff0000"
            segments={12}

            height={200}
            endColor="#4e7ea9"
            textColor="white"
            needleTransitionDuration={100}
            ringWidth={50}
            needleTransition="easeElastic"
            currentValueText="Chỉ số hài lòng: ${value}"
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
