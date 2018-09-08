import React from 'react';
import {NavLink} from 'react-router-dom';
import Chart from './components/Chart'
import Channel from './components/Channel'
class ContainerLeft extends React.Component{
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
              <Chart city_id={this.props.city_id}  dataPieChart = {this.props.dataPieChart} />
              {/* <Chart /> */}
              <Channel />
        </div>
     )
  }
}
module.exports =  ContainerLeft;
