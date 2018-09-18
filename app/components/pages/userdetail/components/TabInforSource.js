import React from 'react'
import Chart from 'react-google-charts'
class TabShade extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      dataLineChart :[
        ['x', 'Facebook', 'Youtube','Blog'],
        [0, 0, 0,0],
        [1, 10, 5,3],
        [2, 23, 15,4],
        [3, 17, 9,13],
        [4, 18, 10,9],
        [5, 9, 5,3],
        [6, 11, 3,14],
        [7, 27, 19,5],
      ]
      }
    }
  render(){
    return(
       <div className="col-md-12 remove-padding-col">


        <div className="col-md-6 remove-padding-col">
          <Chart
  width={'100%'}
  height={'250px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={this.state.dataLineChart}
  options={{
    title: 'DIỄN BIẾN LƯỢNG TIN',

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
          chartArea:{left:40,width:'95%',right:60},
          pointSize: 9,
          colors: [ '#ff0000','#ffbb00'],

  }}

  rootProps={{ 'data-testid': '2' }}
/></div>
      {/* <div className="col-md-6 remove-padding-col">
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
         chartArea:{
          // backgroundColor: {
          //   fill: '#00398f',
          //   fillOpacity: 1
          // },

          left:'15%',width:'75%',
        },
         colors: [ '#ff0000','#00ce7d'],
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
      </div> */}

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
    title: 'TỈ LỆ SỐ LƯỢNG TIN',
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
   barArea:{left:40,width:'95%'},
   pointSize: 9,

   colors: [ '#ff0000','#00ce7d'],
    // Just add this option
    is3D: true,
    legendTextStyle: { color: '#FFF' },
    titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},
    backgroundColor: "#00398f",
  }}
  rootProps={{ 'data-testid': '2' }}
/>
      </div>

       </div>
    )
  }
}
module.exports = TabShade
