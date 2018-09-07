import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ContainerRight from './components/right/ContainerRight'
import Center from './components/center/Center'
import axios from 'axios'
class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        city_id : '0',
        dataPieChart:[],
        dataLineChart:[]
    }

  }
  componentDidMount() {
    this.intervalId = setInterval(this.getCity_id.bind(this), 1000);
  }
  getCity_id(){
    let city_id = localStorage.getItem('city_id');
    if(city_id&& this.state.city_id!=city_id){
      console.log('city_id',city_id)
      this.setState({city_id})
    }
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  componentDidMount(){
    let self = this
    axios.get('/dashboard/getDataChart')
    .then((resdata)=>{
        self.setState({listDataPieChart:resdata.data.charts.dataPieChart,dataLineChart:resdata.data.charts.dataLineChart})
    })
  }
  render(){
     return(

        <div className="dashboard" >
             <div className="col-md-3 remove-padding-col ">
                <ContainerLeft />
             </div>
             <div className="col-md-4">
                <div id="map">
                <Center />
                </div>


                 {/* <img style={{width: "103%",height: "914px",}} src="./images/map.png" /> */}
                   </div>
             <div className="col-md-5 remove-padding-col">
                <ContainerRight city_id={this.state.city_id} />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
