import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import Chart from 'react-google-charts'
import RestfulUtils from 'app/utils/RestfulUtils'

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
// componentDidMount(){
//   let self = this
//   axios.get('/dashboard/getDataChart')
//   .then((resdata)=>{
//       self.setState({listDataPieChart:resdata.data.charts.dataPieChart})
//   })
// }
module.exports = class Charts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       
          listTopTitleTrending:[
            [
              'Element',
              'số tin',
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
            ['Nhân dân tệ được sử dụng tại biên giới', 41, '#ff0000', null],
            ['TBT Nguyễn Phú Trọng thăm Nga', 64, '#ff6900 ', null],
            ['Dùng ký tự trong dạy tiếng việt', 32,'#ffbb00', null],
            ['Bức xúc tại trường tiểu học Sơn Đồng',41, '#0092f1', null],
            ['Nhà máy rác thải tại quảng ngãi và hải dương',98, '#00ce7d', null],
 
          ]
    }
  }
  componentDidMount(){
    let self = this
    RestfulUtils.post('/dashboard/getTopTitleTrending',{})
    .then((res)=>{
        if(res.EC==0)
         self.setState({listTopTitleTrending:res.DT})
    })
  }
  render() {
    return (
      <div className="comment col-md-12 module" >
         <div className="chart-gauge">
         <Chart
         width={"100%"}
         height={'180px'}
         chartType="BarChart"
         loader={<div>Tải dữ liệu</div>}
         data={this.state.listTopTitleTrending}
         options={{
           title: 'PHÂN TÍCH NHÂN ĐỊNH VỀ XU HƯỚNG THẢO LUẬN',
           height: 180,

          //  colors: ['#b0120a', '#ffab91'],
           backgroundColor: '#002864',
           legendTextStyle: { color: '#FFF' },
           titleTextStyle: { color: '#FFF',
            fontFamily: 'Maven Pro',
           fontSize: '13',
           fontName:'Maven Pro',
           float:'left',
           fontWeight:"normal",

          },
           hAxis: {
            format: 'decimal',
            textStyle: {
              color: "#0092f1",
              fontFamily: 'Maven Pro',
              fontName:'Maven Pro',
              fontSize: '10'
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
            fontSize: '10'
              },
            gridlines: {
              color: "#fffff"
            },
            baselineColor: '#fffff',

          } ,

           bar: { groupWidth: '65%' },
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
