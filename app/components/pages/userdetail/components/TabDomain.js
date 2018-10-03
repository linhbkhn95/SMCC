import React from 'react'
import Chart from 'react-google-charts'
class TabShade extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      dataPieChart:[
        ['Task', 'Hours per Day'],
        ['Facebook', 4],
        ['Báo chí',1],
        ['Blog', 2.5],
        ['Khác', 2],
      ],
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

       <div className="col-md-12  remove-padding-col">
       <div className="col-md-12  remove-padding-col"> Tên miền đưa tin nhiều nhất</div>

        <div className="col-md-6 remove-padding-col">




         <Chart
        width={'100%'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Đang tải dữ liệu</div>}
        data={this.props.dataChart.dataPiechartWithDomain}
        options={{
          // Material design options
         title: 'DIỄN BIẾN THEO TÊN MIỀN',
          // chart: {
          //   title: 'TIÊU CỰC THEO NGUỒN TIN',
          //    subtitle: 'Facebook, báo chí, blog 2018',
          // },
          backgroundColor: "#00398f",
          // legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro', fontSize: '13'},
          animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
          },

          // enableInteractivity: false,
          hAxis: {
             title: 'Số lượng tin',
           titleTextStyle: {color: 'white'},
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
            format: 'decimal',

            textStyle: {
            color: "#0092f1",
            fontFamily: 'Maven Pro',
            fontName:'Maven Pro',
            fontSize: '11',
            },
            title: 'Tên miền',
            titleTextStyle: {color: 'white'},
            gridlines: {
              color: "#0a4caf"
            },
            baselineColor: '#0a4caf',

          },


          annotations: {
            stem: {
              color: "transparent",
              length: 28
            },
            textStyle: {
              color: "#000000",
            }
          },
          bars: 'horizontal',
          visibleInLegend: true,
          enableInteractivity: true,

          // bar: { groupWidth: '85%' },
          legend:{
           position:'none',
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
           width: '50%',
          left:'15%',width:'75%',
          bottom:"30px"
        },
        colors: ['#00ce7d', '#ff0000','#0092f1','#ff6900','#ffbb00'],
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
  data={this.props.dataChart.dataPiechartWithDomain}
  options={{
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },

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
   barArea:{left:40,width:'95%'},
   pointSize: 9,

   colors: ['#00ce7d', '#ff0000','#0092f1','#ff6900','#ffbb00'],
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

       </div>
    )
  }
}
module.exports = TabShade
