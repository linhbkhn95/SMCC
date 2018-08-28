import React from 'react';
import {NavLink} from 'react-router-dom';
import Comment from './components/Comment'
import Chart from './components/Chart'
import GaugeChart from './components/ChartsSatisfy'
import BarChart from './components/ChartTendencyComment'
import ChartAnalyst from './components/ChartAnalyst'

// and just use it
class DashBoard extends React.Component{

  render(){
     return(
          <div className=" right" >
              {/* <Comment /> */}
              <GaugeChart />
              <BarChart />
              <ChartAnalyst />
              <Chart />



        </div>
     )
  }
}
module.exports =  DashBoard;
