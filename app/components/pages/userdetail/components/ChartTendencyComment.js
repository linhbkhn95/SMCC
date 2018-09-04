import React from 'react';
import {NavLink} from 'react-router-dom';
var Recharts = require('recharts')
import Chart from 'react-google-charts'

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
      {name: '1 Aug', uv: 4000, pv: 2400, amt: 2400},
      {name: '2 Aug', uv: 3000, pv: 1398, amt: 2210},
      {name: '3 Aug', uv: 2000, pv: 9800, amt: 2290},
      {name: '4 Aug', uv: 2780, pv: 3908, amt: 2000},
      {name: '5 Aug', uv: 1890, pv: 4800, amt: 2181},
      {name: '6 Aug', uv: 2390, pv: 3800, amt: 2500},
      {name: '7 Aug', uv: 3490, pv: 4300, amt: 2100},
];
class SimpleLineChart extends React.Component{
	render () {
  	return (
    	<LineChart width={570} height={150} data={data}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis            fontFamily="Maven Pro" dataKey="name" padding={{left: 30, right: 30}}/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

class Charts extends React.Component{

	render () {
  	return (

        <div className="" >
            {/* <div className="name-chart">ĐƯỜNG XU HƯỚNG THẢO LUẬN</div>
            <div className="chart-develop">
               <SimpleLineChart />
            </div> */}
         <Chart
  width={'100%'}
  height={'250px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs', 'cats','pig'],
    [0, 0, 0,0],
    [1, 10, 5,3],
    [2, 23, 15,4],
    [3, 17, 9,13],
    [4, 18, 10,9],
    [5, 9, 5,3],
    [6, 11, 3,14],
    [7, 27, 19,5],
  ]}
  options={{
    title: 'TẦN SUẤT XUẤT HIỆN',

    backgroundColor: "#00398f",
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro',
           fontSize: '13', },
           hAxis: {
            format: 'decimal',
            textStyle: {
              color: "#0092f1",
              fontFamily: 'Maven Pro',
              fontName:'Maven Pro',
              fontSize: '10',
              fontWeight:"normal",

            },
            gridlines: {
              color: "#0a4caf"
            },
             baselineColor: '#0a4caf'
          },
          vAxis: {
            textStyle: {
            color: "#0092f1",
            fontFamily: 'Maven Pro',
            fontName:'Maven Pro',
            fontSize: '10',
            },
            gridlines: {
              color: "#0a4caf"
            },
            baselineColor: '#0a4caf',

          },

           bar: { groupWidth: '65%' },
           legend: { position: 'none' },
          series: {
            1: { curveType: 'function' },
          },
          chartArea:{left:30,right:30,width:'95%'}

  }}

  rootProps={{ 'data-testid': '2' }}
/>

               {/* <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                      </div> */}
         </div>

    );
  }
}

module.exports =  Charts;
