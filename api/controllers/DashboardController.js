var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
let keyword = sails.config.keyword
module.exports = {

        getDataLineChart:function(req,res){
            let urlAPi = '/TrendingApi.aspx?&prjid=29421&prjid=29421&d1=2018-08-08&d2=2018-09-07&rt=0,1,2,3,4,5,6&dr=4&callback=fb_trending_callback'
            processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
              let dt  = JSON.parse(data);
              // dt = dt.slice(0,5)

              return res.send(dt);

          });

        },
        //lấy dữ liệu chart và progress
        getDataChart:function(req,res){
           let {city_id,d1,d2} = req.body
           city_id = city_id||24
          let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&dr=4'+'&location='+city_id
          processingserver.callAPIWithUrlPublic(urlAPi+'&se=3', async function (err, data_positive) {
              //tích cực

            processingserver.callAPIWithUrlPublic(urlAPi+'&se=1', async function (err, data) {
            let dt_positive  = JSON.parse(data_positive);

            let dt  = JSON.parse(data);

            let {tab_results_count} = dt.charts

            let tab_results_count_positive = dt_positive.charts.tab_results_count
            let result  = {...tab_results_count};
            let result_positive = {...tab_results_count_positive}
            // console.log('resultaaaaaaaaa',result)
            //  console.log('result_positive',result_positive)

            let sum = 0;

            let dataPieChart = []
            let rowPeChart ={}
            var  rowfb = {
                  title : 'Facebook',
                  color : "#ffbb00",
                  value : 0
            }

            // delete result["Forum"]
            // delete result["Youtube"]
            // delete result["News"]
            // delete result["Forum"]

            //lưu data progress
            let listProgress = {

            }
            //tính tổng fb
            let fb_positive = 0;
            let fb_setiment= 0
            for(var index in result) {
               rowPeChart ={}
               let dataProgress = {
                   positive:50,
                   setiment:50
               }
               console.log('data',result_positive[index].count,result[index].count,)
               //tính % theo từng channel
               dataProgress.positive =parseFloat(result_positive[index].count>0?100*parseInt(result_positive[index].count)/(parseInt(result_positive[index].count)+parseInt(result[index].count)):0).toFixed();
               dataProgress.setiment = parseFloat(dataProgress.positive>0?100 - dataProgress.positive :0).toFixed(0);



               listProgress[index] = dataProgress


               rowPeChart.value = result[index].count;
              //  if(index!="Forum"||index!="Youtube"||index!="News")
               switch(index){
                // case 'Fanpage Post' :
                //   rowPeChart.title= "Facebook"
                //   rowPeChart.color = "#ffbb00"
                //   rowPeChart.value = result[index].count;

                //   break ;
                case 'Group Post' :
                      rowPeChart.title= "Bài viết trong Nhóm"
                      rowPeChart.color = "#ff6900"
                      rowPeChart.value = result[index].count +result_positive[index].count;
                      fb_positive += result_positive[index].count
                      fb_setiment += result[index].count

                      break ;

                case 'Fanpage Post' :
                    rowPeChart.title= "Bài viết Fanpage"
                    rowPeChart.color = "#00ce7d"
                    rowPeChart.value = result[index].count +result_positive[index].count;
                    fb_positive += result_positive[index].count
                    fb_setiment += result[index].count
                    break ;
                // case 'User Post' :
                //     rowPeChart.title= "Block"
                //     rowPeChart.color = "#0092f1"
                //     rowPeChart.value = result[index].count;

                //     break ;
                case 'User Post' :
                    rowPeChart.title= "Bài viết cá nhân"
                    rowPeChart.color = "#ff3b8e"
                    rowPeChart.value = result[index].count +result_positive[index].count;
                    fb_positive += result_positive[index].count
                    fb_setiment += result[index].count
                    break ;
                 case "Comment" :
                      rowPeChart.title= "Bình luận"
                      rowPeChart.color = "#0092f1"
                      rowPeChart.value = result[index].count +result_positive[index].count;
                      fb_positive += result_positive[index].count
                      fb_setiment += result[index].count
                    break ;

                  default:break
              }
                 if(index!="Forum"&&
                index!="Youtube"&&
                index!="News"&&
                index!="Forum")
                dataPieChart.push(rowPeChart)

            }


            dt.charts.dataPieChart = dataPieChart;
            listProgress.Facebook = {}
            listProgress["Facebook"].positive = parseFloat(fb_positive?100*fb_positive/(fb_positive+fb_setiment):0).toFixed();
            listProgress["Facebook"].setiment = parseFloat(listProgress["Facebook"].positive?100 - listProgress["Facebook"].positive:0).toFixed();
            dt.listProgress = listProgress
            // row


            //Đồ thị tích cực tiêu cực
            console.log('datalienchat',dt_positive.charts)
            let {sentiment_positive_count_per_day} = dt_positive.charts.chart_sentiment
            let {sentiment_negative_count_per_day}  = dt.charts.chart_sentiment
            let row = []
            let resultLineChart = [
              ['x','Tích cực','Tiêu cực']
            ]
            let i=1
            // console.log('sentment',sentiment_positive_count_per_day,sentiment_negative_count_per_day)
            for(var index in sentiment_negative_count_per_day) {
                row =[]
                row[0]=index.substring(6,index.length)
                row[1] = sentiment_negative_count_per_day[index]
                row[2] = sentiment_positive_count_per_day[index]
                resultLineChart[i++] = row
            }
            dt.charts.dataLineChart = resultLineChart

            return res.send(dt);
          })
        });
      },
       getDataWithCity: async function(req,res){
        try {
              let {city_id,page,pagesize,se,d1,d2} = req.body
              page = page ||1,
              pagesize = pagesize || 6
              city_id = city_id || 24
              se = se || 2

              console.log('se',se)

              if(city_id==0||!city_id)
                  city_id = '24'
              let urlAPi = '/PagingApi.aspx?key='+keyword+'&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&dr=4&p='+page+'&se='+se+'&size='+pagesize+'&location='+city_id
              serviceTest.getUrlPulic(urlAPi,async function (err, data) {
                let dt  = JSON.parse(data);

                return res.send(dt);
              });
        } catch (error) {

        }


      },

      //lay thong tin tieu cuc tichs cuc
      getDataTC:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&se='+city_id
        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          // let dt  = JSON.parse(data);
          // dt = dt.slice(0,5)

          return res.send(data);

      });
      },
      getDataChartPie:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4'

        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          let dt  = JSON.parse(data);
          // dt = dt.slice(0,5)

          return res.send(dt);

         });
      },
      //xu huong
      getDataChartLine:function(req,res){
        let {city_id} = req.body

        let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1=2018-09-01&d2=2018-09-08&rt=0,1,2,3,4,5,6&dr=4&location='+city_id+"&se=1"
        processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {
          let dt  = JSON.parse(data);



            // dt = dt.slice(0,5)

          return res.send(data);

      });
      },
};
