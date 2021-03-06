import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import Chart from 'react-google-charts'

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
          ]
    }
  }
  render(){
    return(
       <div className="pie-chart">
       <div className="col-md-7">
            <PieChart
                data={
                    this.state.listDataPieChart
                }
                lineWith={100}
                animate
                radius={50}
                startAngle={200}
              />
       </div>
       <div className="col-md-5 note">
                  {this.state.listDataPieChart.map((data,index)=>{
                    return(
                       <div key={index} className="note-chart">
                            <div style={{background:data.color}} className="color-title">

                            </div>
                            <div className="name-title">{data.title} </div>
                       </div>


                    )
                  })}
                         {/* <Chart
   width={'100%'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Tải đồ thị</div>}
  data={[
    ['Element',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify',
    }
    ],
    // ['Tiêu chí 1', 'Hours per Day',null],
    ['Tiêu chí 2', 11,'#ffbb00',null],
    ['Tiêu chí 3', 2,'#ff6900',null],
    ['Tiêu chí 4', 2,'#00ce7d',null],
    ['Tiêu chí 5', 2,'#0092f1',null],
    ['Tiêu chí 6', 2,'#ff3b8e',null],

    // ['Sleep', 7],
  ]}
  options={{
    // title: 'My Daily Activities',
    backgroundColor: '#002864',

  }}
  rootProps={{ 'data-testid': '1' }}
/>*/}
       </div>
       </div>
    )
  }
}
module.exports = Charts;
