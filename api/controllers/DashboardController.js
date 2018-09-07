
/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
var listCountry = require('./country.json')
module.exports = {

        getDataLineChart:function(req,res){
            let urlAPi = '/TrendingApi.aspx?&prjid=29421&prjid=29421&d1=2018-08-08&d2=2018-09-07&rt=0,1,2,3,4,5,6&dr=4&callback=fb_trending_callback'
            processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
              let dt  = JSON.parse(data);
              // dt = dt.slice(0,5)

              return res.send(dt);

          });

          },
        getDataChart:function(req,res){
          let urlAPi = '/ChartApi.aspx?&prjid=29421&d1=2018-09-01&d2=2018-09-07&rt=0,1,2,3,4,5,6&dr=4&size=10'
          processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
            let dt  = JSON.parse(data);
            let {tab_results_count} = dt.charts;
            let result  = tab_results_count;

            let sum = 0;
            // {
            //   value : 11,
            //   color:"#ffbb00",
            //   title:"Báo chí"

            // },
            // {
            //   value : 9,
            //   color:"#ff6900",
            //   title:"fb"

            // },
            // {
            //   value : 47,
            //   color:"#00ce7d",
            //   title:"Tiêu chí 3"

            // },
            // {
            //   value : 21,
            //   color:"#0092f1",
            //   title:"Tiêu chí 4"

            // },
            // {
            //   value : 12,
            //   color:"#ff3b8e",
            //   title:"Tiêu chí 5"

            // },
            let dataPieChart = []
            let rowPeChart ={}
            var  rowfb = {
                  title : 'Facebook',
                  color : "#ffbb00",
                  value : 0
            }
            for(var index in result) {
               rowPeChart ={}

              rowPeChart.value = result[index].count;

              switch(index){
                // case 'Fanpage Post' :
                //   rowPeChart.title= "Facebook"
                //   rowPeChart.color = "#ffbb00"
                //   rowPeChart.value = result[index].count;

                //   break ;
                case 'Forum' :
                      rowPeChart.title= "Diễn đàn"
                      rowPeChart.color = "#ff6900"
                      rowPeChart.value = result[index].count;

                      break ;

                case 'Youtube' :
                    rowPeChart.title= "Youtube"
                    rowPeChart.color = "#00ce7d"
                    rowPeChart.value = result[index].count;

                    break ;
                // case 'User Post' :
                //     rowPeChart.title= "Block"
                //     rowPeChart.color = "#0092f1"
                //     rowPeChart.value = result[index].count;

                //     break ;
                case 'News' :
                    rowPeChart.title= "Báo chí"
                    rowPeChart.color = "#ff3b8e"
                    rowPeChart.value = result[index].count;

                    break ;
                 default :
                    // rowPeChart.title= index
                    rowfb.value +=result[index].count
                   console.log('fb',index)
                    break ;
              }
              if(rowPeChart.title)
                  dataPieChart.push(rowPeChart)

            }
            dataPieChart.push(rowfb)

            dt.charts.dataPieChart = dataPieChart;
            // row
            return res.send(dt);

        });
      },
       getDataWithCity: async function(req,res){
        // let {city_id} = req.body
        // if(city_id==0||!city_id)
        //     city_id = '24'
        let urlAPi = '/PagingApi.aspx?key=[{"main_keyword":"chính+phủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&p=1&size=10&location=24'
         processingserver.callAPIWithUrlPublic(urlAPi,async function (err, data) {
          console.log(data)
           let dt  = JSON.parse(data);

          return res.send(dt);

          });
      },

      //lay thong tin tieu cuc tichs cuc
      getDataTC:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key=[{"main_keyword":"chính+phủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&se='+city_id
        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          // let dt  = JSON.parse(data);
          // dt = dt.slice(0,5)

          return res.send(data);

      });
      },
      getDataChartPie:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key=[{"main_keyword":"chính+phủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4'

        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          let dt  = JSON.parse(data);
          // dt = dt.slice(0,5)

          return res.send(dt);

         });
      },
      //xu huong
      getDataChartLine:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key=[{"main_keyword":"chính+phủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&location='+city_id
        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          // let dt  = JSON.parse(data);
          // dt = dt.slice(0,5)

          return res.send(data);

      });
      },
};

