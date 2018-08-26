import React from 'react';
import {NavLink} from 'react-router-dom';

class DashBoard extends React.Component{

  render(){
     return(

        <div className="header-filter-center header-chart" >
            <div className="type-filter active">
               <div className="text" ><i className="fa fa-heart-o" aria-hidden="true"></i>Cảm xúc người dùng</div>
            </div>
            <div className="type-filter">
                  <div className="text" ><i className="fa fa-user-o" aria-hidden="true"></i> Phân loại người dùng</div>
            </div>


        </div>
     )
  }
}
module.exports =  DashBoard;
