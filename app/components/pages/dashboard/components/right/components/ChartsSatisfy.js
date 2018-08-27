import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import ReactSpeedometer from "react-d3-speedometer";
class Comment extends React.Component{
	render () {
  	return (
      <div className="comment col-md-12 module" >
            <ReactSpeedometer
            value={55}
            maxValue={100}
            needleColor="#002864"
            startColor="#ff0000"
            segments={10}
            endColor="#4e7ea9"
            textColor="#0092f1"
            needleTransitionDuration={100}
            needleTransition="easeElastic"
            currentValueText="Chỉ số hài lòng: ${value}"
            />

              </div>
    );
  }
}



module.exports =  Comment;
