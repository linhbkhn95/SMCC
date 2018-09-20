import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import Chart from 'react-google-charts'
import axios from 'axios'

class Charts extends React.Component{
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
          city_id:'',
          dataPieChart:[],
          d1:''
    }
  }
  componentDidMount(){
    let self = this
    let {city_id,dataPieChart} = this.props

    this.setState({city_id,dataPieChart})
  }
  componentWillReceiveProps(nextProps){
    let {city_id,dataPieChart,d1} = nextProps
    if(this.state.dataPieChart.length==0||this.state.city_id!=city_id||d1!=this.state.d1){
         console.log('set piechart',city_id,dataPieChart)
        this.setState({city_id,dataPieChart,d1})

        // this.getDataWithCity(city_id)
    }
  }
  render(){
    return(
       <div className="pie-chart col-md-12 ">

       {/* <Chart
  width={'100%'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
    backgroundColor: '#002864',
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro',   fontSize: '13',},
    bar: { groupWidth: '65%' },
    legend: { position: 'none' },
    is3D: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/> */}
            {/* <PieChart
                data={
                    this.state.dataPieChart
                }
                lineWith={100}
                animate
                radius={50}
                startAngle={200}
              />
       </div>
       <div className="col-md-5 note">
                  {this.state.dataPieChart.map((data,index)=>{
                    return(
                       <div key={index} className="note-chart">
                            <div style={{background:data.color}} className="color-title">

                            </div>
                            <div className="name-title">{data.title} </div>
                       </div>


                    )
                  })} */}

 <Chart
  width={'100%'}
  height={'250px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={this.props.dataPieChart}
  options={{
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },

    // title: 'TỈ LỆ SỐ LƯỢNG TIN',
    hAxis: {
      format: 'decimal',
      textStyle: {
        color: "#0092f1",
        fontFamily: 'Maven Pro',
        fontName:'Maven Pro',
        fontSize: '10',
        fontWeight:"normal",

      },
      gridlines: {
        color: "#0a4caf"
      },
       baselineColor: '#0a4caf'
    },
    vAxis: {
      textStyle: {
      color: "#0092f1",
      fontFamily: 'Maven Pro',
      fontName:'Maven Pro',
      fontSize: '10',
      },
      gridlines: {
        color: "#0a4caf"
      },
      baselineColor: '#0a4caf',

    },
    bar: { groupWidth: '100%' },
    legend:{
     position:'right',
     textStyle: {color: 'white',  fontName:'Maven Pro',
     fontSize: '10',
     fontWeight:"normal",}
    },
    series: {
      2: {
        annotations: {
          stem: {
            color: "transparent",
            length: 28
          },
          textStyle: {
            color: "#000000",
          }
        },
        enableInteractivity: false,
        // tooltip: "none",
        visibleInLegend: false
      },
    },
   barArea:{left:40,width:'100%'},

   colors: ['#00ce7d', '#ff0000','#0092f1','#ff6900','#ffbb00'],
   // Just add this option
    is3D: true,
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},
    backgroundColor: '#002864'  }}
  rootProps={{ 'data-testid': '6' }}
/>
       </div>
    )
  }
}
module.exports = Charts;
