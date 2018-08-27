import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import ReactSpeedometer from "react-d3-speedometer";
class Comment extends React.Component{
	render () {
  	return (
      <div className="comment col-md-12 module" >
              <ReactSpeedometer />
              </div>
    );
  }
}



module.exports =  Comment;
