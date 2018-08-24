import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ContainerRight from './components/right/ContainerRight'

class DashBoard extends React.Component{

  render(){
     return(

        <div className="" >
             <div className="col-md-4 ">
                <ContainerLeft />
             </div>
             <div className="col-md-4">
                Map
             </div>
             <div className="col-md-4">
                <ContainerRight />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
