
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
            let result  = {...tab_results_count};

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
            delete result["Forum"]
            delete result["Youtube"]
            delete result["News"]
            delete result["Forum"]

            for(var index in result) {
               rowPeChart ={}

              rowPeChart.value = result[index].count;

              switch(index){
                // case 'Fanpage Post' :
                //   rowPeChart.title= "Facebook"
                //   rowPeChart.color = "#ffbb00"
                //   rowPeChart.value = result[index].count;

                //   break ;
                case 'Group Post' :
                      rowPeChart.title= "Bài viết trong Nhóm"
                      rowPeChart.color = "#ff6900"
                      rowPeChart.value = result[index].count;

                      break ;

                case 'Fanpage Post' :
                    rowPeChart.title= "Bài viết Fanpage"
                    rowPeChart.color = "#00ce7d"
                    rowPeChart.value = result[index].count;

                    break ;
                // case 'User Post' :
                //     rowPeChart.title= "Block"
                //     rowPeChart.color = "#0092f1"
                //     rowPeChart.value = result[index].count;

                //     break ;
                case 'User Post' :
                    rowPeChart.title= "Bài viết cá nhân"
                    rowPeChart.color = "#ff3b8e"
                    rowPeChart.value = result[index].count;

                    break ;
                 default :
                      rowPeChart.title= "Bình luận"
                      rowPeChart.color = "#0092f1"
                      rowPeChart.value = result[index].count;

                    break ;
              }

                dataPieChart.push(rowPeChart)

            }


            dt.charts.dataPieChart = dataPieChart;
            // row

            let {sentiment_positive_count_per_day,sentiment_negative_count_per_day} = dt.charts.chart_sentiment
            let row = []
            let resultLineChart = [
              ['x','Tích cực','Tiêu cực']
            ]
            let i=1
            // console.log('sentment',sentiment_positive_count_per_day,sentiment_negative_count_per_day)
            for(var index in sentiment_negative_count_per_day) {
                row =[]
                row[0]=index
                row[1] = sentiment_negative_count_per_day[index]
                row[2] = sentiment_positive_count_per_day[index]
                resultLineChart[i++] = row
            }
            dt.charts.dataLineChart = resultLineChart

            return res.send(dt);

        });
      },
       getDataWithCity: async function(req,res){
        let {city_id,page,pagesize,se} = req.body
        page = page ||1,
        pagesize = pagesize || 6
        city_id = city_id || 24
        se = se || 2
        if(city_id==0||!city_id)
            city_id = '24'
        let urlAPi = '/PagingApi.aspx?key=[{"main_keyword":"chính+phủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&p=1&size=10&location=24'
         serviceTest.getUrlPulic('/PagingApi.aspx?key=[{%22main_keyword%22:%22ch%C3%ADnh+ph%E1%BB%A7%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%C3%ADnh+s%C3%A1ch%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22lu%E1%BA%ADt+ph%C3%A1p%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%E1%BA%BF+%C4%91%E1%BB%99%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22d%C3%A2n+ch%E1%BB%A7%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%C6%B0%E1%BB%9Dng+l%E1%BB%91i%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%E1%BA%A3ng%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22}]&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&p='+page+'&size='+pagesize+'&location='+city_id,async function (err, data) {
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
          let dt  = JSON.parse(data);



            // dt = dt.slice(0,5)

          return res.send(data);

      });
      },
};

