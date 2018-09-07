import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ListCharts from './components/right/ListCharts'
import Center from './components/center/Center'
class DashBoard extends React.Component{

  render(){
     return(

        <div className="dashboard" >
             <div className="col-md-3 ">
                <ContainerLeft />
             </div>
             <div className="col-md-5">

                {/* <Center /> */}
             </div>
             <div className="col-md-4">
                <ListCharts />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
