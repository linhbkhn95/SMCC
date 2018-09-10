import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ContainerRight from './components/right/ContainerRight'
import Center from './components/center/Center'
import axios from 'axios'
import moment from 'moment'
class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        city_id : '24',
        se:'2',
        dataPieChart:[],
        dataLineChart:[],
        dataProgress:{
          "Group Post":{},
          "User Post":{},
          "Facebook":{},
          "Youtube":{},
          "Forum":{},
          "Fanpage Post":{},
          "News":{},
          "Comment":{}

      }    }

  }

  componentDidMount() {
    let self = this
    // axios.post('/dashboard/getDataChart',{city_id:'24'})
    // .then((resdata)=>{
    //     self.setState({dataPieChart:resdata.data.charts.dataPieChart,dataLineChart:resdata.data.charts.dataLineChart,city_id:'24'})
    // })
    // location.reload();
    this.getDataChart('24');
    this.intervalId = setInterval(this.getCity_id.bind(this), 1000);

  }
  getCity_id(){
    let city_id = localStorage.getItem('city_id');
    if(city_id&& this.state.city_id!=city_id){
      this.getDataChart(city_id);
      this.setState({city_id})
    }
  }
  componentWillUnmount(){
    // $('#map').empty()

    clearInterval(this.intervalId);
  }

  getDataChart(city_id){
    let self = this
    let se = this.state.se
    axios.post('/dashboard/getDataChart',{city_id,se})
    .then((resdata)=>{
        self.setState({dataPieChart:resdata.data.charts.dataPieChart,dataLineChart:resdata.data.charts.dataLineChart,dataProgress:resdata.data.listProgress})
    })
  }
  onChangeSe(se){
      this.setState({se})
  }
  onChangeFilterDay(numberDay){
     let d1 =moment().format('YYYY-MM-dd');                          // 2018-09-11T02:46:15+07:00
     let d2 = moment().subtract(numberDay, 'days').format('YYYY-MM-dd'); // 01/09/2018
    console.log('d1',d1,'d2',d2)
  }
  render(){
     return(

        <div className="dashboard" >
             <div className="col-md-3 remove-padding-col ">
                <ContainerLeft onChangeFilterDay={this.onChangeFilterDay.bind(this)} dataProgress={this.state.dataProgress}  city_id={this.state.city_id} dataPieChart={this.state.dataPieChart} />
             </div>
             <div className="col-md-4">
                <div id="map">
                <Center />
                </div>


                 {/* <img style={{width: "103%",height: "914px",}} src="./images/map.png" /> */}
                   </div>
             <div className="col-md-5 remove-padding-col">
                <ContainerRight onChangeSe={this.onChangeSe.bind(this)} dataLineChart ={this.state.dataLineChart} city_id={this.state.city_id} />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
