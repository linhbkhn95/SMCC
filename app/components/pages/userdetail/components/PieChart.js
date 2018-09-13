import React from 'react';
import Chart from 'react-google-charts'

class ChartSatify extends React.Component{
	render () {
    let dataPieChart = this.props.dataPieChart

  	return (
<Chart
  width={'300px'}
  height={'250px'}
  chartType="PieChart"
  loader={<div>Tải dữ liệu...</div>}
  data={dataPieChart}
  options={{
    // title: 'My Daily Activities',
    // Just add this option
    pieHole: 0.5,
    backgroundColor: 'none',
    titleTextStyle:{
      color:'white'
    }
      ,
      slices: [],
      titleTextStyle:{
        color: 'white'
      },
      legend:{
          position:'right',
          textStyle: {color: 'white'}
      },
    colors: ['#00ce7d', '#e6693e'],

    pieSliceBorderColor:'',
    fontSize:'11px',
    fontName:'Maven Pro',
    chartArea:{left:20,top:0,width:'100%',height:'75%'}
  }}
  rootProps={{ 'data-testid': '3' }}
/>
    );
  }
}

module.exports = ChartSatify
