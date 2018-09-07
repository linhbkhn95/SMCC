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
            console.log('data',dt.charts)
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
              console.log(index)
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
             console.log('data1',dataPieChart,rowfb)

            dt.charts.dataPieChart = dataPieChart;
            // row
            return res.send(dt);

        });
        }
};

