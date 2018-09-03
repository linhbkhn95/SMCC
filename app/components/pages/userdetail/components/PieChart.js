import React from 'react';
import Chart from 'react-google-charts'

class ChartSatify extends React.Component{
	render () {
  	return (
<Chart
  width={'300px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Tải dữ liệu...</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Tích cực', 4],
    ['Tiêu cực', 2],
    ['Nhắc đến', 2],
    ['Spam', 2],
  ]}
  options={{
    // title: 'My Daily Activities',
    // Just add this option
    pieHole: 0.6,
    backgroundColor: 'none',
    color:"white"

  }}
  rootProps={{ 'data-testid': '3' }}
/>
    );
  }
}

module.exports = ChartSatify
