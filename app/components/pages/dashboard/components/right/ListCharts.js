import React from 'react';
import {NavLink} from 'react-router-dom';
import ChartTrend from './components/ChartTrend'
import GaugeChart from './components/ChartsSatisfy'
import BarChart from './components/ChartTendencyComment'
import ChartAnalyst from './components/ChartAnalyst'

// and just use it
class DashBoard extends React.Component{

  render(){
     return(
          <div className="right" >
              {/* <Comment /> */}
              <GaugeChart />
              <BarChart d1={this.props.d1} d2={this.props.d2} />
              <ChartAnalyst   d1={this.props.d1} d2={this.props.d2}  />
              <ChartTrend d1={this.props.d1} dataLineChart ={this.props.dataLineChart} city_id ={this.props.city_id}  />



        </div>
     )
  }
}
module.exports =  DashBoard;
