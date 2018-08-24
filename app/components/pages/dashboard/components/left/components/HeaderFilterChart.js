import React from 'react';
import {NavLink} from 'react-router-dom';

class DashBoard extends React.Component{

  render(){
     return(

        <div className="col-md-12 header-chart" >
            <div className="col-md-3 type-filter active">
               <div className="text" > Ngày</div>
            </div>
            <div className="col-md-3 type-filter">
                 <div className="text" > Tuần</div>
            </div>
            <div className="col-md-3 type-filter">
                 <div className="text" > Tháng</div>
            </div>
            {/* <div className="option-filter"> */}
                <select className="form-control option-filter">
                    <option><i className="fa fa-calendar-check-o" aria-hidden="true"></i>
30 ngày trước</option>
                </select>
            {/* </div> */}
        </div>
     )
  }
}
module.exports =  DashBoard;
