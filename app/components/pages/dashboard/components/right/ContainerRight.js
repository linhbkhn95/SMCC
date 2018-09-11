import React from 'react';
import {NavLink} from 'react-router-dom';
import Comment from './components/ContainerPost'
import ChartTrend from './components/ChartTrend'
import GaugeChart from './components/ChartsSatisfy'
import BarChart from './components/ChartTendencyComment'
import ChartAnalyst from './components/ChartAnalyst'

// and just use it
class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city_id:'1'
    }
  }



  render(){
     return(
          <div className="right" >
              {/*
              <BarChart />
              <ChartAnalyst /> */}
              {/* <GaugeChart /> */}
              <Comment d1={this.props.d1} d2 ={this.props.d2} onChangeSe={this.props.onChangeSe} city_id={this.props.city_id} />

              <ChartTrend d1={this.props.d1} dataLineChart ={this.props.dataLineChart} city_id ={this.props.city_id} />



        </div>
     )
  }
}
module.exports =  DashBoard;
