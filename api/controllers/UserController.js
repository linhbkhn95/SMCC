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
                    let {topic,source_id,date_from,date_to,page} = req.body
                    topic = topic||71
                    let dataTopic = []
                    dataTopic[0] = topic
                    source_id = source_id||0
                    let dataSource = []
                    dataSource[0] = topic

                let obj = {
                  "topic":dataTopic,
                  "user_id":651,
                  "source_id":dataSource,
                  "order_by":"1",
                  "sentiment":[-1,0,1],
                  "domain":"",
                  "keyword":'',
                  "seconKeyword":[],
                  "limit":"1",
                  "page":"0",
                  "date_from":date_from,
                  "date_to":date_to,
                  "event_master":"1"
                }
                var data = {
                  "access_token":access_token,
                  "action":"/news/search",
                  "data":obj
                };
                processingserver.callPostAuth(data, async function (err, rs) {

                    if (rs.code == 0) {

                      return res.send(Ioutput.success(rs.data.search));
                    }
                    else {

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
                  "access_token":access_token,
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
                res.send(Ioutput.errServer(rs));
            }





          });
        } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
      }
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
              "access_token":access_token,
              "action":"/news/statistic-source",
              "data":obj
            };



        processingserver.callPostAuth(data, async function (err, rs) {
            if(rs.code==0){


                let resultLineChart = [
                  ['x','Tích cực','Tiêu cực']
                ]
                let i=1
                let data = rs.data
                for(var index =0;i<rs.data.length;index++) {
                  row =[]
                  row[0]=data[index].key_as_string.substring(5,10)

                  row[1] = data[index]['source_id'][0]['Other'].sentiment+ data[index]['source_id'][4]['Forum'].sentiment+  data[index]['source_id'][2]['Social'].sentiment + data[index]['source_id'][1]['News'].sentiment + data[index]['source_id'][3]['Blog'].sentiment
                  row[2] =  data[index]['source_id'][0]['Other'].neutral+ data[index]['source_id'][4]['Forum'].neutral+  data[index]['source_id'][2]['Social'].neutral + data[index]['source_id'][1]['News'].neutral + data[index]['source_id'][3]['Blog'].neutral


                  resultLineChart[i++] = row
              }
              rs.dataLineChart = resultLineChart
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
                "access_token":access_token,
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
                  "access_token":access_token,
                  "action":"/user/get-all-info"
                };



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

