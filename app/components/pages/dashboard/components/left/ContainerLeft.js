import React from 'react';
import {NavLink} from 'react-router-dom';
import Chart from './components/Chart'
import Channel from './components/Channel'
class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
//   componentDidMount(){
//     axios.get('/dashboard/getDataChart')
//     .then((resdata)=>{

//     })
//  }

  render(){

     return(

        <div className="left" >
              <Chart />
              {/* <Chart /> */}
              <Channel />
        </div>
     )
  }
}
module.exports =  DashBoard;
