import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Chart from 'react-google-charts'
import axios from 'axios'

import RestfulUtils from 'app/utils/RestfulUtils'

import moment from 'moment'
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

module.exports = class Charts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          listDataPieChart:[
            {
              value : 11,
              color:"#ffbb00",
              title:"Tiêu chí 1"

            },
            {
              value : 9,
              color:"#ff6900",
              title:"Tiêu chí 2"

            },
            {
              value : 47,
              color:"#00ce7d",
              title:"Tiêu chí 3"

            },
            {
              value : 21,
              color:"#0092f1",
              title:"Tiêu chí 4"

            },
            {
              value : 12,
              color:"#ff3b8e",
              title:"Tiêu chí 5"

            },
          ],
          listTopTitleTrending:[[
            'Density',
            'số tin',
            { role: 'style' },
           //  {
           //   sourceColumn: 0,
           //   role: 'annotation',
           //   type: 'string',
           //   calc: 'stringify',
           // },
            {
              sourceColumn: 1,
              role: 'annotation',
              type: 'string',
              calc: 'stringify',
            },
          ],
          ['Cộng sản', 41, '#ff0000', null],
          ['Vòng xoay dần', 64, '#ff6900 ', null],
          ['Hà Giang', 32,'#ffbb00', null],
          ['Tự do',41, '#0092f1', null],
          ['Hồ ngọc đại',98, '#00ce7d', null],

        ]
    }
  }
  // componentDidMount(){
  //   let self = this
  //   let {d1,d2} = this.props
  //   let callback = 'fb_trending_callback'
  //   RestfulUtils.post('/dashboard/getTopTitleTrending',{callback,d1,d2})
  //   .then((res)=>{
  //       if(res.EC==0)
  //        self.setState({listTopTitleTrending:res.DT})
  //   })
  // }
  getTopTitle(d1,d2){
    let callback = 'fb_trending_callback'
    let self = this
    RestfulUtils.post('/dashboard/getTopTitleTrending',{callback,d1,d2})
    .then((res)=>{
        if(res.EC==0&&res.DT.length>1)
         self.setState({listTopTitleTrending:res.DT})
    })
  }
  componentWillReceiveProps(nextProps){
      let {d1,d2} = nextProps
      if(d1!=this.props.d1||d2!=this.props.d2){
         this.getTopTitle(d1,d2)
      }
  }
  render() {
    return (
      <div className="comment col-md-12 module" >
         <div className="chart-gauge">
         <Chart
         width={"100%"}
         height={'180px'}
         chartType="BarChart"
         loader={<div>Loading Chart</div>}
         data={this.state.listTopTitleTrending
           }
         options={{
           title: 'XU HƯỚNG THẢO LUẬN CHÍNH',
           height: 180,

          //  colors: ['#b0120a', '#ffab91'],
           backgroundColor: '#002864',
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',
           fontFamily: 'Maven Pro',
           fontSize: '13',
           fontName:'Maven Pro',
           fontWeight:"normal",
           },
           hAxis: {
            format: 'decimal',
            textStyle: {
              color: "#0092f1"
            },
            gridlines: {
              color: "#0092f1"
            },
             baselineColor: '#002864'
          },
          vAxis: {
              textStyle: {
            color: "#FFFFFF",
            fontFamily: 'Maven Pro',
            fontName:'Maven Pro',
            fontSize: '10'
              },
            gridlines: {
              color: "#fffff"
            },
            baselineColor: '#fffff',

           },

           bar: { groupWidth: '65%' },
           legend: { position: 'none' },
         }}
         style={{
         }}
         // For tests
         rootProps={{ 'data-testid': '6' }}
       />      </div>

    </div>
    );
  }
};
