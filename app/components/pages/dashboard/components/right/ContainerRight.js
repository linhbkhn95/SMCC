import React from 'react';
import {NavLink} from 'react-router-dom';
import Comment from './components/Comment'
import Chart from './components/Chart'
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
              <Comment city_id={this.props.city_id} />

              <Chart dataLineChart ={this.props.dataLineChart} city_id ={this.props.city_id} />



        </div>
     )
  }
}
module.exports =  DashBoard;
