import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Chart from 'react-google-charts'
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

module.exports = class Charts extends React.Component{

  render() {
    return (
      <div className="comment col-md-12 module" >
         <div className="chart-gauge">
         <Chart
         width={"100%"}
         height={'300px'}
         background={'red'}
         chartType="BarChart"
         loader={<div>Loading Chart</div>}
         data={[
           [
             'Element',
             '%',
             { role: 'style' },
            //  {
            //   sourceColumn: 0,
            //   role: 'annotation',
            //   type: 'string',
            //   calc: 'stringify',
            // },
             {
               sourceColumn: 1,
               role: 'annotation',
               type: 'string',
               calc: 'stringify',
             },
           ],
           ['ASIAD 2018', 41, '#ff0000', null],
           ['Tuyển sinh 2018', 64, '#ff6900 ', null],
           ['Hà Giang', 32,'#ffbb00', null],
           ['Thảo luận',41, '#0092f1', null],
           ['Ế',98, '#00ce7d', null],

         ]}
         options={{
           title: 'XU HƯỚNG THẢO LUẬN CHÍNH',
           height: 300,

          //  colors: ['#b0120a', '#ffab91'],
           backgroundColor: '#002864',
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',  fontFamily: 'Maven Pro',
           fontSize: '16', },
           hAxis: {
            format: 'decimal',
            textStyle: {
              color: "#0092f1"
            },
            gridlines: {
              color: "#0092f1"
            },
             baselineColor: '#002864'
          },
          vAxis: {
              textStyle: {
            color: "#FFFFFF",
            fontFamily: 'Maven Pro',
            fontName:'Maven Pro',
            fontSize: '12',
            gridlines: {
              color: "#fffff"
            },
            baselineColor: '#fffff',

          } },

           bar: { groupWidth: '60%' },
           legend: { position: 'none' },
         }}
         style={{
         }}
         // For tests
         rootProps={{ 'data-testid': '6' }}
       />      </div>

    </div>
    );
  }
};
