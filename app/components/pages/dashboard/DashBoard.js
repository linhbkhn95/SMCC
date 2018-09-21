import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerLeft from './components/left/ContainerLeft'
import ContainerRight from './components/right/ContainerRight'
import Center from './components/center/Center'
import axios from 'axios'
import moment from 'moment'
// var $ = require('jquery');
// $ = require('jvectormap-next');

class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        city_id : '0',
        se:'2',
        d1:'',
        d2:'',
        dataPieChart: [
          [
            "Element",
            "số tin",
            {
              "role": "style"
            },
            {
              "sourceColumn": 1,
              "role": "annotation",
              "type": "string",
              "calc": "stringify"
            }
          ],
          [
            "Bài viêt Fanpage",
            0,
            "#0092f1",
            null
          ],
          [
            "Bài viêt trong nhóm",
            143,
            "#ff0000",
            null
          ],
          [
            "Bài viêt cá nhân",
            1226,
            "#00ce7d",
            null
          ],
          [
            "Bình luận",
            696,
            "#ff6900",
            null
          ]
        ],
        "dataLineChart": [
          [
            "x",
            "Tích cực",
            "Tiêu cực"
          ],
          [
            "9-14",
            211,
            193
          ],
          [
            "9-15",
            205,
            193
          ],
          [
            "9-16",
            156,
            132
          ],
          [
            "9-17",
            155,
            131
          ],
          [
            "9-18",
            173,
            127
          ],
          [
            "9-19",
            117,
            112
          ],
          [
            "9-20",
            90,
            68
          ],
          [
            "9-21",
            2,
            null
          ]
        ],
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
    this.createMap();

    // axios.post('/dashboard/getDataChart',{city_id:'24'})
    // .then((resdata)=>{
    //     self.setState({dataPieChart:resdata.data.charts.dataPieChart,dataLineChart:resdata.data.charts.dataLineChart,city_id:'24'})
    // })
    // location.reload();
    let d2 = moment().format('YYYY-MM-DD');                          // 2018-09-11T02:46:15+07:00
    let d1 = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 01/09/2018
     this.setState({d1,d2})
    this.getDataChart('0',d1,d2);
    // this.intervalId = setInterval(this.getCity_id.bind(this), 1000);

  }
  componentWillMount(){
    $('#map').empty()

 }
  getCity_id(city_id){
    let {d1,d2} = this.state
    if(city_id&& this.state.city_id!=city_id){
      this.getDataChart(city_id,d1,d2);
       this.setState({city_id})
    }
  }

  createMap(){
    let self = this
    console.log('creat map')
    $('#map').vectorMap({
      map: 'vietnam',
      backgroundColor: "transparent",
      onRegionClick:function(event, code){
          var name = (code);
          self.getCity_id(code)
          localStorage.setItem('city_id', code);

          // $('id_city').text('test');

      },
      onRegionTipShow: function (e, el, code) {

        // el.html(el.html() + '<p  id="popop"></p>').css("zIndex","5");
        el.html(el.html()).css("zIndex","5");

      },
      onMarkerClick: function (e, c) {
        setFocusLatLng(5, markers[c].latLng[0], markers[c].latLng[1]);
       } ,
      zoomOnScroll: false,
      zoomButtons : false,
      regionStyle: {
          initial: {
              fill: '#0f5acb',
          },
          selected: {
            fill: 'black',
            "fill-opacity": 0.7,

          },
          hover : {
             fill:'#002864',
             "fill-opacity": 1,
             cursor: 'pointer',
        },
      },
      series: {
          regions: [{
              attribute: 'fill',
              normalizeFunction: 'polynomial'
          }]
      },
    })
  }
  componentWillUnmount(){
    // $('#map').empty()

    // clearInterval(this.intervalId);
  }

  getDataChart(city_id,d1,d2){
    let self = this
    let {se} = this.state
    axios.post('/dashboard/getDataChart',{city_id,d1,d2})
    .then((resdata)=>{
        self.setState({dataPieChart:resdata.data.charts.dataPieChart,dataLineChart:resdata.data.charts.dataLineChart,dataProgress:resdata.data.listProgress})
    })
  }

  onChangeFilterDay(numberDay){
     let city_id = this.state.city_id
     let d2 =moment().format('YYYY-MM-DD');                          // 2018-09-11T02:46:15+07:00
     let d1 = moment().subtract(numberDay, 'days').format('YYYY-MM-DD'); // 01/09/2018
     this.getDataChart(city_id,d1,d2);
    this.setState({d1,d2})

  }
  onchangeCity(objectCity){
    this.getCity_id(objectCity.value);
  }
  render(){
     return(

        <div className="dashboard" >
             <div className="col-md-3 remove-padding-col ">
                <ContainerLeft d1={this.state.d1} d2 ={this.state.d2} onChangeFilterDay={this.onChangeFilterDay.bind(this)} dataProgress={this.state.dataProgress}  city_id={this.state.city_id} dataPieChart={this.state.dataPieChart} />
             </div>
             <div className="col-md-4">
                <div id="map">
                <Center />
                </div>


                 {/* <img style={{width: "103%",height: "914px",}} src="./images/map.png" /> */}
                   </div>
             <div className="col-md-5 remove-padding-col">
                <ContainerRight onchangeCity={this.onchangeCity.bind(this)} d1={this.state.d1} d2={this.state.d2} dataLineChart ={this.state.dataLineChart} city_id={this.state.city_id} />
             </div>
        </div>
     )
  }
}
module.exports =  DashBoard;
