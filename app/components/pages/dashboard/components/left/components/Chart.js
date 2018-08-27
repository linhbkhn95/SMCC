import React from 'react';
import {NavLink} from 'react-router-dom';
import ChartCustom from './PieChart'
import HeaderFilterChart from './HeaderFilterChart'
var Recharts = require( 'recharts')
const { PieChart, Pie, Sector, Cell } = Recharts;
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Chart extends React.Component{
	render () {
  	return (
      <div className="row module" >
       <HeaderFilterChart />
    	{/* <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart> */}
         <ChartCustom />

      </div>
    );
  }
}


// class DashBoard extends React.Component{

//   render(){
//      return(

//         <div className="row module" >
//              Chart

//         </div>
//      )
//   }
// }
module.exports =  Chart;
