import React from 'react';
import {NavLink} from 'react-router-dom';
import Chart from './components/Chart'
import Channel from './components/Channel'
class DashBoard extends React.Component{

  render(){
     return(

        <div className="left" >
              <Chart />
              {/* <Chart /> */}
              <Channel />
        </div>
     )
  }
}
module.exports =  DashBoard;
