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
          colors: [ '#ff0000','#0092f1','#ff6900','#ffbb00'],

  }}

  rootProps={{ 'data-testid': '2' }}
/></div>
      <div className="col-md-6 remove-padding-col">
            <Chart
        width={'100%'}
        height={'300px'}
        chartType="Bar"
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
          title: 'TIÊU CỰC THEO NGUỒN TIN',
          // chart: {
          //   title: 'TIÊU CỰC THEO NGUỒN TIN',
          //   // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          // },
          backgroundColor: "#00398f",

          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},
          background: "#00398f",
          // chartArea: { width: '50%' },

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
         colors: [ '#ff0000','#ffbb00'],
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
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
