import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ContainerRight from './components/right/ContainerRight'
import Center from './components/center/Center'
class DashBoard extends React.Component{

  render(){
     return(

        <div className="dashboard" >
             <div className="col-md-3 remove-padding-col ">
                <ContainerLeft />
             </div>
             <div className="col-md-4">
                 <img style={{width: "103%",height: "914px",}} src="./images/map.png" />
                   </div>
                {/* <Center /> */}
             <div className="col-md-5 remove-padding-col">
                <ContainerRight />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
