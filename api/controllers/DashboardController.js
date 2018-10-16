var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
let keyword = sails.config.keyword
var colors = ['#ff0000','#ff6900','#ffbb00','#0092f1','#00ce7d']

module.exports = {

       getDataLineChart:function(req,res){
          try {
                let urlAPi = '/TrendingApi.aspx?&prjid=29421&prjid=29421&d1=2018-08-08&d2=2018-09-07&rt=0,1,2,3,4,5,6&dr=4&callback=fb_trending_callback'
                processingserver.callAPIWithUrlPublic(urlAPi, async function (err, data) {

                  let dt  = JSON.parse(data);
                  // dt = dt.slice(0,5)

                  return res.send(dt);

              });

          } catch (error) {
            return res.send(Ioutput.errServer(error));

          }

        },

       getTopTitleTrending:function(req,res){
        try {
          let {callback,d1,d2} = req.body

          callback = callback || 'fb_trending_callback'
          let h = '/TrendingApi.aspx?key=[{%22main_keyword%22:%22ch%C3%ADnh+ph%E1%BB%A7%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%C3%ADnh+s%C3%A1ch%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22mua+h%C3%A0ng%22},{%22main_keyword%22:%22ph%C3%A1p+lu%E1%BA%ADt%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22lu%E1%BA%ADt+ph%C3%A1p%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%E1%BA%BF+%C4%91%E1%BB%99%22,%22require_keywords%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22d%C3%A2n+ch%E1%BB%A7%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%C6%B0%E1%BB%9Dng+l%E1%BB%91i%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%E1%BA%A3ng%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22}]'
          // let keyword = '[{"main_keyword":"chính+phủ","require_keywords":"việt+nam","exclude_keywords":""},{"main_keyword":"chính+sách","require_keywords":"việt+nam","exclude_keywords":"mua+hàng"},{"main_keyword":"pháp+luật","require_keywords":"","exclude_keywords":""},{"main_keyword":"luật+pháp","require_keywords":"","exclude_keywords":""},{"main_keyword":"chế+độ","require_keywords":"cộng+sản","exclude_keywords":""},{"main_keyword":"cộng+sản","require_keywords":"","exclude_keywords":""},{"main_keyword":"dân+chủ","require_keywords":"","exclude_keywords":""},{"main_keyword":"đường+lối","require_keywords":"","exclude_keywords":""},{"main_keyword":"đảng","require_keywords":"","exclude_keywords":""}]'
          let urlAPi = '/TrendingApi.aspx?key=[{%22main_keyword%22:%22ch%C3%ADnh+ph%E1%BB%A7%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%C3%ADnh+s%C3%A1ch%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22mua+h%C3%A0ng%22},{%22main_keyword%22:%22ph%C3%A1p+lu%E1%BA%ADt%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22lu%E1%BA%ADt+ph%C3%A1p%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%E1%BA%BF+%C4%91%E1%BB%99%22,%22require_keywords%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22d%C3%A2n+ch%E1%BB%A7%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%C6%B0%E1%BB%9Dng+l%E1%BB%91i%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%E1%BA%A3ng%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22}]&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&callback='+callback
          serviceTest.getUrlPulic(urlAPi,async function (err, data) {
            console.log('getTopTitleTrending',data)
            let dt  = JSON.parse(data);
            let result = []
            if(dt.fb_trending_callback)
                result = dt.fb_trending_callback
            if(dt[callback]&&dt[callback].length>5)
                 result = dt[callback].slice(0,5)

            let resultBarchart = [
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
               ]

                for(var i=0;i<result.length;i++){
                    let count = i+1
                    resultBarchart[i+1] = []
                    resultBarchart[i+1][0] = null
                    resultBarchart[i+1][1] = parseInt(result[i].doc_count) + parseInt(result[i].bg_count)
                    resultBarchart[i+1][2] = colors[i]
                    resultBarchart[i+1][3] = result[i].key +'-'   + resultBarchart[i+1][1]
                }

                 return res.send(Ioutput.success(resultBarchart));
              });

        } catch (error) {
          return res.send(Ioutput.errServer(error));

        }

      },
        //lấy dữ liệu chart và progress
        getDataChart:function(req,res){
          try {
            let {city_id,d1,d2} = req.body
            city_id = city_id||0
           let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&dr=4'+'&location='+city_id
           processingserver.callAPIWithUrlPublic(urlAPi+'&se=2,3', async function (err, data_positive) {
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

             let dataPieChart =[
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
            ]
            dataPieChart[1] = []
            dataPieChart[2] = []
            dataPieChart[3] = []
            dataPieChart[4] = []
            // dataPieChart[5] = []
             let rowPieChart ={}
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
             let count =1;
             for(var index in result) {
                rowPieChart ={}
                let dataProgress = {
                    positive:50,
                    setiment:50
                }
                //tính % theo từng channel
                dataProgress.positive =parseFloat(result_positive[index].count>0?100*parseInt(result_positive[index].count)/(parseInt(result_positive[index].count)+parseInt(result[index].count)):0).toFixed();
                dataProgress.setiment = parseFloat(dataProgress.positive>0?100 - dataProgress.positive :0).toFixed(0);



                listProgress[index] = dataProgress


                rowPieChart.value = result[index].count;
               //  if(index!="Forum"||index!="Youtube"||index!="News")
                switch(index){
                 // case 'Fanpage Post' :
                 //   rowPieChart.title= "Facebook"
                 //   rowPieChart.color = "#ffbb00"
                 //   rowPieChart.value = result[index].count;

                 //   break ;
                 case 'Group Post' :

                       fb_positive += result_positive[index].count
                       fb_setiment += result[index].count
                       dataPieChart[count][0] ="Bài viêt trong nhóm"
                       dataPieChart[count][1] = result[index].count +result_positive[index].count
                       dataPieChart[count][2] = "#ff0000"
                       dataPieChart[count][3] =null
                       count++
                       break ;

                 case 'Fanpage Post' :

                     fb_positive += result_positive[index].count
                     fb_setiment += result[index].count
                     dataPieChart[count][0] ="Bài viêt Fanpage"
                     dataPieChart[count][1] = result[index].count +result_positive[index].count
                     dataPieChart[count][2] = "#0092f1"
                     dataPieChart[count][3] =null
                     count++
                     break ;
                 // case 'User Post' :
                 //     rowPieChart.title= "Block"
                 //     rowPieChart.color = "#0092f1"
                 //     rowPieChart.value = result[index].count;

                 //     break ;
                 case 'User Post' :

                     fb_positive += result_positive[index].count
                     fb_setiment += result[index].count
                     console.log('addadad',dataPieChart)
                     dataPieChart[count][0] ="Bài viêt cá nhân"
                     dataPieChart[count][1] = result[index].count +result_positive[index].count
                     dataPieChart[count][2] = "#00ce7d"
                     dataPieChart[count][3] =null
                     count++
                     break ;
                  case "Comment" :

                       fb_positive += result_positive[index].count
                       fb_setiment += result[index].count
                       dataPieChart[count][0] ="Bình luận"
                       dataPieChart[count][1] = result[index].count +result_positive[index].count
                       dataPieChart[count][2] = "#ff6900"
                       dataPieChart[count][3] =null
                       count++
                     break ;

                   default:break
               }


                //   if(index!="Forum"&&
                //  index!="Youtube"&&
                //  index!="News"&&
                //  index!="Forum")
                //  break
             }


             dt.charts.dataPieChart = dataPieChart;
             listProgress.Facebook = {}
             listProgress["Facebook"].positive = parseFloat(fb_positive?100*fb_positive/(fb_positive+fb_setiment):0).toFixed();
             listProgress["Facebook"].setiment = parseFloat(listProgress["Facebook"].positive?100 - listProgress["Facebook"].positive:0).toFixed();
             dt.listProgress = listProgress
             // row


             //Đồ thị tích cực tiêu cực
             let {sentiment_positive_count_per_day} = dt_positive.charts.chart_sentiment
             let {sentiment_negative_count_per_day}  = dt.charts.chart_sentiment
             console.log('datalienchat',sentiment_positive_count_per_day,sentiment_negative_count_per_day)

             let row = []
             let resultLineChart = [
               ['x','Tích cực','Tiêu cực']
             ]
             let i=1
             let satisfy
             // console.log('sentment',sentiment_positive_count_per_day,sentiment_negative_count_per_day)
             for(var index in sentiment_negative_count_per_day) {
                 row =[]
                 row[0]=index.substring(6,index.length)

                 row[1] = sentiment_positive_count_per_day[index]
                 row[2] = sentiment_negative_count_per_day[index]
                 resultLineChart[i++] = row
             }
             satisfy = resultLineChart[i-1][1] ?resultLineChart[i-1][1] *100/(resultLineChart[i-1][1] +resultLineChart[i-1][2]) :0
             dt.charts.dataLineChart = resultLineChart
             dt.satisfy = satisfy
             return res.send(dt);
           })
         });
          } catch (error) {
            return res.send(Ioutput.errServer(error));

          }

      },
      // http://smcc.socials.vn/ChartApi.aspx?key={keyword}&d1={start_date}&d2={end_date}&rt={source}&se={sentiment_status}
      // getDataChart:function(req,res){
      //   try {
      //     let {city_id,d1,d2} = req.body
      //     city_id = city_id||24
      //    let urlAPi = '/ChartApi.aspx?key='+keyword+'&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&dr=4'+'&location='+city_id
      //    processingserver.callAPIWithUrlPublic(urlAPi+'&se=3', async function (err, data_positive) {
      //    })
      //   } catch (error) {
      //     return res.send(Ioutput.errServer(error));

      //   }
      // }
       getDataWithCity: async function(req,res){
        try {
              let {city_id,page,pagesize,se,d1,d2} = req.body
              page = page ||1,
              pagesize = pagesize || 6
              city_id = city_id || 0
              se = se || '1,2,3'

              console.log('se',se)

              if(city_id==0||!city_id)
                  city_id = '0'
              let urlAPi = '/PagingApi.aspx?key='+keyword+'&d1='+d1+'&d2='+d2+'&rt=0,1,2,3,4,5,6&dr=4&p='+page+'&se='+se+'&size='+pagesize+'&location='+city_id
              serviceTest.getUrlPulic(urlAPi,async function (err, data) {
                let dt  = JSON.parse(data);

                return res.send(dt);
              });
        } catch (error) {
          return res.send(Ioutput.errServer(error));
        }


      },



};
