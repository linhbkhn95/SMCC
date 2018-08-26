import React from 'react';
import {NavLink} from 'react-router-dom';
import Comment from './components/Comment'
import Chart from './components/Chart'
class DashBoard extends React.Component{

  render(){
     return(
          <div className=" right" >
              <Comment />
              <Chart />



        </div>
     )
  }
}
module.exports =  DashBoard;
