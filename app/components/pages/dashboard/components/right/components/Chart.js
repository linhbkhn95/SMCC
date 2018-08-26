import React from 'react';
import {NavLink} from 'react-router-dom';
var Recharts = require('recharts')
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

class Chart extends React.Component{

	render () {
  	return (

        <div className="comment col-md-12 module" >
            <div className="name-chart">ĐƯỜNG XU HƯỚNG THẢO LUẬN</div>
            <div className="chart-develop">
               <SimpleLineChart />
            </div>
         </div>

    );
  }
}

module.exports =  Chart;
