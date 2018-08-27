import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import Chart from './Chart'
class Comment extends React.Component{
	render () {
  	return (
      <div className="comment col-md-12 module" >
         <div className="col-md-12 header-chart">
              <div className="pull-left">
                  <div className="name-city">Hà Nội</div>
              </div>
              <div className="pull-right filter-comment">
                  <div className="type-filter active">
                  <div className="text" >Tất cả</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tích cực</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tiêu cực</div>
                </div>
              </div>
         </div>
         <ListStatus />
      </div>
    );
  }
}



module.exports =  Comment;
