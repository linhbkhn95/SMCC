import React from 'react';
import {NavLink} from 'react-router-dom';

class DashBoard extends React.Component{

  onChange(event){
      console.log(event.target.value)
      this.props.onChangeFilterDay(event.target.value)
  }
  render(){
     return(

        <div className="header-chart" >
            <div className="type-filter active">
               <div className="text" > Ngày</div>
            </div>
            <div className=" type-filter">
                 <div className="text" > Tuần</div>
            </div>
            <div className=" type-filter">
                 <div className="text" > Tháng</div>
            </div>
            {/* <div className="option-filter"> */}
                <select onChange={this.onChange.bind(this)} className="form-control option-filter">
                    <option value="7">7 ngày trước</option>

                    <option value="30">30 ngày trước</option>
                </select>
            {/* </div> */}
        </div>
     )
  }
}
module.exports =  DashBoard;
