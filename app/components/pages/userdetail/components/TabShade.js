import React from 'react'
import Chart from 'react-google-charts'
class TabShade extends React.Component{

  constructor(props){
    super(props);
    this.state ={
        dataLineChart :[
          ['x', 'Tiêu cực'],
          [0, 0],
          [1, 10],
          [2, 23],
          [3, 17],
          [4, 18],
          [5, 9],
          [6, 11],
          [7, 27],
        ]
      }
    }
  render(){
    return(
       <div className="col-md-12 remove-padding-col">


        <div className="col-md-12 remove-padding-col">
          <Chart
  width={'100%'}
  height={'250px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={this.state.dataLineChart}
  options={{
    title: 'TIÊU CỰC THEO THỜI GIAN',

    backgroundColor: "#00398f",
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro',
           fontSize: '13', },
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

           bar: { groupWidth: '85%' },
           legend:{
            position:'top',
            textStyle: {color: 'white'}
           },
             series: {
            1: { curveType: 'function' },


          },
          chartArea:{left:40,width:'95%'},
          pointSize: 9,
          colors: [ '#ff0000','#ffbb00'],

  }}

  rootProps={{ 'data-testid': '2' }}
/></div>
      <div className="col-md-6 remove-padding-col">
            <Chart
        width={'100%'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Nguồn tin', 'Tiêu cực', 'Tích cực'],
          ['Facebook', 1000, 400],
          ['Báo chí', 1170, 460],
          ['Diễn đàn', 660, 1120],
          ['Blog', 660, 1120],

          ['Khác', 1030, 540],
        ]}
        options={{
          // Material design options
          // title: 'TIÊU CỰC THEO NGUỒN TIN',
          animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
          },
          chart: {
            title: 'TIÊU CỰC THEO NGUỒN TIN',
             subtitle: 'Facebook, báo chí, blog 2018',
          },
          backgroundColor: "#00398f",
          isStacked: true,
          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},

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
          bar: { groupWidth: '85%' },
          legend:{
           position:'bottom',
           textStyle: {color: 'white'}
          },
            series: {
           1: { curveType: 'function' },


         },
         axes: {
          y: {
            0: { side: 'right' },
          },
        },
        //  backgroundColor: {
        //   fill: '#FF0000',
        //   fillOpacity: 0.8
        // },
        annotations: {
          stem: {
            color: "transparent",
            length: 28
          },
          textStyle: {
            color: "#000000",
          }
        },
        chartArea:{
          // backgroundColor: {
          //   fill: '#00398f',
          //   fillOpacity: 1
          // },
           width: '50%',
          left:'15%',width:'75%',
          bottom:"30px"
        },
         colors: [ '#ff0000','#00ce7d'],
        }}
        // For tests
        rootProps={{ 'data-testid': '3' }}
      />
      </div>

      <div className="col-md-6 remove-padding-col">
      <Chart
  width={'100%'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Tích cực', 11],
    ['Tiêu cực', 2],

  ]}
  options={{
    title: 'TỈ LỆ TIÊU CỰC',
    hAxis: {
      format: 'decimal',
      textStyle: {
        color: "#0092f1",
        fontFamily: 'Maven Pro',
        fontName:'Maven Pro',
        fontSize: '10',
        fontWeight:"normal",

      },
      animation: {
        startup: true,
        easing: 'linear',
        duration: 1500,
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
    // bar: { groupWidth: '85%' },
    legend:{
     position:'bottom',
     textStyle: {color: 'white'}
    },
      series: {
     1: { curveType: 'function' },


   },

   barArea:{left:40,width:'95%'},
   pointSize: 9,

   colors: [ '#ff0000','#00ce7d'],
    // Just add this option
    is3D: true,
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},
    backgroundColor: "#00398f",
  }}
  rootProps={{ 'data-testid': '3' }}
/>
      </div>

       </div>
    )
  }
}
module.exports = TabShade
