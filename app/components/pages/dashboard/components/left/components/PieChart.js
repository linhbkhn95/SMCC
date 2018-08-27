import React from 'react'
import PieChart from 'react-minimal-pie-chart';

class Chart extends React.Component{
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
       </div>
       </div>
    )
  }
}
module.exports = Chart;
