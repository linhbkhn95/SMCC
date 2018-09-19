/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
var lodash = require('lodash')

var access_token ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdWNfYXR0dF9tb25pdG9yIiwiZXhwIjoxNTM3NTI2MjY4LCJpYXQiOjE1MzYzMTY2Njh9.oBe7m_tAZIMFrOpRinYCdIBabKgfZSE15YHWrC2sJsNtmYLIiV0U0BXmbc_e4UOvPv4K584Yn0nPzJUCEPzQdA"
module.exports = {


      //lay tin bai @linh.trinh
      get_new_search:function(req,res){
                   try {
                    let {topic,source_id,date_from,date_to,page,pagesize} = req.body
                    topic = topic||71
                    let dataTopic = []
                    dataTopic[0] = topic
                    source_id = source_id||0
                    let dataSource = []
                    dataSource[0] = source_id

                let obj = {
                  "topic":dataTopic,
                  "user_id":651,
                  "source_id":dataSource,
                  "order_by":"1",
                  "sentiment":[-1,0,1],
                  "domain":"",
                  "keyword":'',
                  "seconKeyword":[],
                  "limit":pagesize,
                  "page":page,
                  "date_from":date_from,
                  "date_to":date_to,
                  "event_master":"1"
                }
                var data = {
                  "access_token":sails.config.access_token,
                  "action":"/news/search",
                  "data":obj
                };
                processingserver.callPostAuth(data, async function (err, rs) {

                    if (rs.code == 0) {
                      return res.send(Ioutput.success(rs));
                    }
                    else {
                      sails.log.info(rs);

                      return res.send(Ioutput.errServer(rs));

                    }



              });
            } catch (error) {
              sails.log.error(error);
              return res.send(Ioutput.errServer(error));
          }
      },
           //lấy thông kê liên quan đối tượng
            get_new_statistic_daily:function(req,res){
              try {
                let {topic} = req.body
                topic = topic||71
                let dataTopic = []
                dataTopic[0] = topic

                let obj = {
                  "topic":dataTopic,
                  "date_from":"2018-09-08 00:00:00",
                  "date_to":"2018-09-12 00:00:00",
                  "event_master":"1"
                }
                var data = {
                  "access_token":sails.config.access_token,
                  "action":"/news/statistic-daily",
                  "data":obj
                };



            processingserver.callPostAuth(data, async function (err, rs) {



              if(rs.code==0){
                if(rs.data){
                //thống kê theo tích cực tiêu cực
                 let dataPieChart = []

                 dataPieChart[0] = ['Task', 'Hours per Day'],
                 dataPieChart[1] =[];
                 dataPieChart[2]=[]
                 dataPieChart[1][0]= "Tích cực"
                 dataPieChart[1][1]= rs.data["positive_count"]
                 dataPieChart[2][0]= "Tiêu cực"
                 dataPieChart[2][1]= rs.data["neutral_count"]
                //  dataPieChart[3][0]= "Tình tiêu"
                //  dataPieChart[3][1]= rs.data["Sentiment_count"]


                //thống kê theo từng channel
                 rs.data.dataPieChart = dataPieChart

                 let dataPieChartWithChannel = []
                 dataPieChartWithChannel[0] = ['Task', 'Hours per Day']
                 dataPieChartWithChannel[1]=[]
                 dataPieChartWithChannel[2]=[]
                 dataPieChartWithChannel[3] = []
                 dataPieChartWithChannel[4] = []
                 dataPieChartWithChannel[5] = []
                 dataPieChartWithChannel[1][0]= "Facebook"
                 dataPieChartWithChannel[1][1]= rs.data["Social"].number
                 dataPieChartWithChannel[2][0]= "Báo chí"
                 dataPieChartWithChannel[2][1]= rs.data["News"].number
                 dataPieChartWithChannel[3][0]= "Diễn đàn"
                 dataPieChartWithChannel[3][1]=rs.data["Forum"].number
                 dataPieChartWithChannel[4][0]= "Blog"
                 dataPieChartWithChannel[4][1]=rs.data["Blog"].number
                 dataPieChartWithChannel[5][0]= "Khác"
                 dataPieChartWithChannel[5][1]=rs.data["Other"].number

                 rs.data.dataPieChartWithChannel = dataPieChartWithChannel
                 console.log('dâd',dataPieChartWithChannel)
                 return res.send(Ioutput.success(rs.data));

              }
            }
            else{
              sails.log.info(rs);

                res.send(Ioutput.errServer(rs));
            }





          });
        } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
      }
      },
      getDataLineChart(){

      },
      getDataPieChart(){

      },
        //lấy thông kê liên trang domain
        get_new_chartline_domain:function(req,res){
          try {
            let {topic,date_to,date_from} = req.body
            topic = topic||71
            let dataTopic = []
            dataTopic[0] = topic
            let obj = {
              "topic":dataTopic,
              "date_from":date_from,
              "date_to":date_to,
              "event_master":"1",
              "secondKeyword":[],
              "keyword":"",
              "type_time":"d"
            }
            var data = {
              "access_token":sails.config.access_token,
              "action":"/news/statistic-source",
              "data":obj
            };



        processingserver.callPostAuth(data, async function (err, rs) {
            if(rs.code==0){

                //let covert data sang line chart cả tiêu cực và tích cực

                let resultLineChart = [
                  ['x','Tích cực','Tiêu cực']
                ]
                //barchart theo tên miền

                let resultLineChartWithDomain = [
                  ['x','Facebook','Báo chí','Diễn đàn','Blog','Khác']
                ]
                //piechart theo tên miền
                let resulPieChartChartWithDomain = [
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
                ]
                let totalFacebook=totalNews=totalForum=totalBlog=totalOther=0
                resulPieChartChartWithDomain[1] = []
                resulPieChartChartWithDomain[2] = []
                resulPieChartChartWithDomain[3] = []
                resulPieChartChartWithDomain[4] = []
                resulPieChartChartWithDomain[5] = []


                //barchart bên thống kê special
                let resultBarChart  = [['Nguồn tin', 'Tiêu cực', 'Tích cực']]
                let objectBarChart = {}
                let j=0
                let data = rs.data


                let dataPieChart =    [['Trạng thái', 'Tổng số tin']]



                dataPieChart[1] = []
                dataPieChart[2] = []
                let totalPositive  = 0 //tong tich cuc
                let totalNeutral = 0 // tong tich cuc

                for(var index =0;index<data.length;index++) {
                  let row =[]
                  let rowLineChartWithDomain = []
                  let rowPiChart
                  let rowBarchart = []
                  row[0]=data[index].key_as_string.substring(5,10)


                  row[1] = data[index]['source_id'][0]['Other'].sentiment+ data[index]['source_id'][4]['Forum'].sentiment+  data[index]['source_id'][2]['Social'].sentiment + data[index]['source_id'][1]['News'].sentiment + data[index]['source_id'][3]['Blog'].sentiment
                  row[2] =  data[index]['source_id'][0]['Other'].neutral+ data[index]['source_id'][4]['Forum'].neutral+  data[index]['source_id'][2]['Social'].neutral + data[index]['source_id'][1]['News'].neutral + data[index]['source_id'][3]['Blog'].neutral



                  //set row linechart theo tên miền
                  rowLineChartWithDomain[0] =data[index].key_as_string.substring(5,10)
                  rowLineChartWithDomain[1] = data[index]['source_id'][2]['Social'].sentiment + data[index]['source_id'][2]['Social'].neutral
                  rowLineChartWithDomain[2] = data[index]['source_id'][1]['News'].sentiment + data[index]['source_id'][1]['News'].neutral
                  rowLineChartWithDomain[3] = data[index]['source_id'][4]['Forum'].sentiment + data[index]['source_id'][4]['Forum'].neutral
                  rowLineChartWithDomain[4] = data[index]['source_id'][3]['Blog'].sentiment + data[index]['source_id'][3]['Blog'].neutral
                  rowLineChartWithDomain[5] = data[index]['source_id'][0]['Other'].sentiment + data[index]['source_id'][0]['Other'].neutral


                  //tính tổng lượng tin theo từng tên miền

                  totalFacebook += rowLineChartWithDomain[1]
                  totalNews += rowLineChartWithDomain[2]
                  totalForum +=rowLineChartWithDomain[3]
                  totalBlog +=rowLineChartWithDomain[4]
                  totalOther +=rowLineChartWithDomain[5]


                  totalPositive += row[1]
                  totalNeutral +=row[2]
                  //for trên các channel
                  for(var i=0 ;i<= data[index].source_id.length;i++){
                    for(var property in data[index].source_id[i]){
                      if( !objectBarChart[property])
                        objectBarChart[property] ={
                           sentiment:0,
                           neutral:0
                        }

                       objectBarChart[property].sentiment +=data[index]['source_id'][i][property].sentiment
                       objectBarChart[property].neutral +=data[index]['source_id'][i][property].neutral

                      }
                  }
                  j +=1
                  resultLineChart[j] = row
                  resultLineChartWithDomain[j] = rowLineChartWithDomain
              }
              //convert objectBarchart to array
              resultBarChart[1] = []
              resultBarChart[2] = []

              resultBarChart[3] = []

              resultBarChart[4] = []

              resultBarChart[5] = []
              //dataBarChart
              resultBarChart[1][0] = 'Facebook'
              resultBarChart[1][1] = objectBarChart['Social'].neutral
              resultBarChart[1][2] = objectBarChart['Social'].sentiment
              resultBarChart[2][0] = 'Báo chí'
              resultBarChart[2][1] = objectBarChart['News'].neutral
              resultBarChart[2][2] = objectBarChart['News'].sentiment

              resultBarChart[3][0] = 'Diễn đàn'
              resultBarChart[3][1] = objectBarChart['Forum'].neutral
              resultBarChart[3][2] = objectBarChart['Forum'].sentiment
              resultBarChart[4][0] = 'Blog'
              resultBarChart[4][1] = objectBarChart['Blog'].neutral
              resultBarChart[4][2] = objectBarChart['Blog'].sentiment
              resultBarChart[5][0] = 'Khác'
              resultBarChart[5][1] = objectBarChart['Other'].neutral
              resultBarChart[5][2] = objectBarChart['Other'].sentiment


              //set dataPieChart theo tich cực tiêu cực
              dataPieChart[1][0] = "Tích cực"
              dataPieChart[1][1] = totalPositive
              dataPieChart[2][0] = "Tiêu cực"

              dataPieChart[2][1] = totalNeutral



              //set dataPieChart theo domain
              resulPieChartChartWithDomain[1][0]= "Facebook"
              resulPieChartChartWithDomain[1][1]= totalFacebook
              resulPieChartChartWithDomain[1][2]= "00ce7d"
              resulPieChartChartWithDomain[1][3]= null

              resulPieChartChartWithDomain[2][0]= "Báo chí"
              resulPieChartChartWithDomain[2][1]= totalNews
              resulPieChartChartWithDomain[2][2]= "#0092f1"
              resulPieChartChartWithDomain[2][3]= null

              resulPieChartChartWithDomain[3][0]= "Diên đàn"
              resulPieChartChartWithDomain[3][1]= totalForum
              resulPieChartChartWithDomain[3][2]= "#ffbb00"
              resulPieChartChartWithDomain[3][3]= null

              resulPieChartChartWithDomain[4][0]= "Blog"
              resulPieChartChartWithDomain[4][1]= totalBlog
              resulPieChartChartWithDomain[4][3]= "#ff6900"
              resulPieChartChartWithDomain[4][3]= null

              resulPieChartChartWithDomain[5][0]= "Khác"
              resulPieChartChartWithDomain[5][1]= totalOther
              resulPieChartChartWithDomain[5][2]= "#ff0000"
              resulPieChartChartWithDomain[5][3]= null

              rs.dataPiechartWithDomain = resulPieChartChartWithDomain
              rs.dataPieChart = dataPieChart
              rs.dataBarChart =resultBarChart
              rs.dataLineChart = resultLineChart
              rs.dataLineChartWithDomain = resultLineChartWithDomain
              return res.send(Ioutput.success(rs));

            }
            else{
                res.send(Ioutput.errServer(rs));
            }


        });
        } catch (error) {
            sails.log.error(error);
            return res.send(Ioutput.errServer(error));
          }
        },

          //lấy dồ thị line liên trang domain
          get_new_statistic_domain:function(req,res){
            try {
              let {topic} = req.body
              topic = topic||71
              let dataTopic = []
              dataTopic[0] = topic
              let obj = {
                "topic":dataTopic,
                "date_from":"2018-09-08 00:00:00",
                "date_to":"2018-09-12 00:00:00",
                "event_master":"0",
                "secondKeyword":[],
                "keyword":""
              }
              var data = {
                "access_token":sails.config.access_token,
                "action":"/news/statistic-source",
                "data":obj
              };



          processingserver.callPostAuth(data, async function (err, rs) {



                return res.send(Ioutput.success(rs));





          });
          } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
          }
      },
      //lay danh sách nguoi dung dac biet @linh.trinh
      get_all_info:function(req,res){
        try {
               var data = {
                "access_token":sails.config.access_token,
                "action":"/user/get-all-info"
                };

          console.log('access_token',sails.config.access_token)

            processingserver.callAPIWithUrl(data, async function (err, rs) {

               if (rs.code == 0) {
                //  sails.log.info('data',rs)
                 let dt  = rs.data.childrenOrmTopics;
                //
              //   var listuser = lodash.filter(dt, function (item) {

              //      return item.topic_type==0;
              //  });
                  let listuser = dt.map((user)=>{
                    return {
                         id:user.id,
                         display_name:ReWriteText.ReWriteName(user.display_name)
                    }
                  })
                  return res.send(Ioutput.success(listuser));
                }
                else {

                  return res.send(Ioutput.errServer(rs));

                    // return res.send(rs);
                }



          });
        } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
      }
    }
};

