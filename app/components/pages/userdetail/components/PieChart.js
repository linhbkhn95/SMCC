import React from 'react';
import Chart from 'react-google-charts'

class ChartSatify extends React.Component{
	render () {
    let {dataPieChartWithChannel,dataPieChart} = this.props

  	return (
      <div className="col-md-12 remove-padding-col">
      <div className="col-md-6 remove-padding-col">
<Chart
  width={'100%'}
  height={'220px'}
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
      colors: ['#00ce7d', '#ff0000','#0092f1','#ff6900','#ffbb00'],
      bar: { groupWidth: '95%' },
    pieSliceBorderColor:'',
    fontSize:'11px',
    fontName:'Maven Pro',
    chartArea:{left:20,top:0,width:'100%',height:'75%'}
  }}
  rootProps={{ 'data-testid': '3' }}
/></div>
<div className="col-md-6 remove-padding-col">
<Chart
  width={'100%'}
  height={'220px'}
  chartType="PieChart"
  loader={<div>Tải dữ liệu...</div>}
  data={dataPieChartWithChannel}
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
    colors: ['#00ce7d', '#ff0000','#0092f1','#ff6900','#ffbb00'],
    bar: { groupWidth: '95%' },
    pieSliceBorderColor:'',
    fontSize:'11px',
    fontName:'Maven Pro',
    chartArea:{left:20,top:0,width:'100%',height:'75%'}
  }}
  rootProps={{ 'data-testid': '3' }}
/></div>
</div>
    );
  }
}

module.exports = ChartSatify
