import React from 'react';
import {NavLink} from 'react-router-dom';
var Recharts = require('recharts')
import Chart from 'react-google-charts'



class Charts extends React.Component{
  componentDidMount(){
    let {city_id,dataLineChart} = this.props

    this.setState({city_id,dataLineChart})
  }
  componentWillReceiveProps(nextProps){
    let {city_id,dataLineChart,d1} = nextProps
    if(this.state.dataLineChart.length==0||this.state.city_id!=city_id||this.state.d1!=d1){
        this.setState({city_id,dataLineChart,d1})

        // this.getDataWithCity(city_id)
    }
  }
  constructor(props){
    super(props);
    this.state = {
      options:[],
      subject:null,

      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
       listStatus:[

        ],
        city_id:0,
        dataLineChart:[],
        d1:''
    }
  }
  // getDataChartLine(city_id){
  //   let that = this
  //   RestfulUtils.post('/dashboard/getDataChartLine',{city_id}).then((res)=>{
  //         that.setState({listStatus:res.results})

  //   })



	render () {
  	return (

        <div className="comment col-md-12 module" >
            {/* <div className="name-chart">ĐƯỜNG XU HƯỚNG THẢO LUẬN</div>
            <div className="chart-develop">
               <SimpleLineChart />
            </div> */}
         <Chart
  width={'100%'}
  height={'200px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={this.state.dataLineChart}
  options={{
    title: 'ĐƯỜNG XU HƯỚNG THẢO LUẬN',

    backgroundColor: '#002864',
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro',
           fontSize: '13', },
           hAxis: {
            // format: 'decimal',
            textStyle: {
              color: "#0092f1",
              fontFamily: 'Maven Pro',
              fontName:'Maven Pro',
              fontSize: '8',
              fontWeight:"normal",
            },
            // titleTextStyle: {color: 'white'},
            // title: 'Thời gian',
            gridlines: {
              color: "#ffffff"
            },
            baselineColor: '#0a4caf',
          },
          vAxis: {
            textStyle: {
            color: "#0092f1",
            fontFamily: 'Maven Pro',
            fontName:'Maven Pro',
            fontSize: '8',
            },
            titleTextStyle: {color: 'white'},
            gridlines: {
              color: "#0a4caf"
            },
            // title: 'Số lần thảo luận',
            baselineColor: '#0a4caf',

          },
          curveType: 'function',
          legend: { position: 'bottom' },


           bar: { groupWidth: '100%' },
          //  legend: { position: 'none' },
          series: {
            1: { curveType: 'function' },
          },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
         </div>

    );
  }
}

module.exports =  Charts;
