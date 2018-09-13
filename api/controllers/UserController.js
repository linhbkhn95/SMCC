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

                let obj = {
                  "topic":[71],
                  "user_id":651,
                  "source_id":[1,2,3,4,12],
                  "order_by":"1",
                  "sentiment":[-1,0,1],
                  "domain":"",
                  "keyword":"",
                  "seconKeyword":[],
                  "limit":"1",
                  "page":"0",
                  "date_from":"2018-09-08 00:00:00",
                  "date_to":"2018-09-12 00:00:00",
                  "event_master":"1"
                }
                var data = {
                  "access_token":access_token,
                  "action":"/news/search",
                  "data":obj
                };
                processingserver.callPostAuth(data, async function (err, rs) {

                    if (rs.code == 0) {
                  //   //  sails.log.info('data',rs)
                  //     let dt  = rs.data.topics;
                  //   //
                  // //   var listuser = lodash.filter(dt, function (item) {

                  // //      return item.topic_type==0;
                  // //  });
                  //     let listuser = dt.map((user)=>{
                  //       return {
                  //             id:user.id,
                  //             display_name:ReWriteText.ReWriteName(user.display_name)
                  //       }
                  //     })
                      return res.send(Ioutput.success(rs));
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
      },
           //lấy thông kê liên quan đối tượng
            get_new_statistic_daily:function(req,res){
              try {

                let obj = {
                  "topic":["71"],
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



                  return res.send(Ioutput.success(rs));





          });
        } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
      }
      },
        //lấy thông kê liên trang domain
        get_new_statistic_domain:function(req,res){
          try {

            let obj = {
              "topic":["71"],
              "date_from":"2018-09-08 00:00:00",
              "date_to":"2018-09-12 00:00:00",
              "event_master":"1",
              "secondKeyword":[],
              "keyword":""
            }
            var data = {
              "access_token":access_token,
              "action":"/news/statistic-daily",
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
                 let dt  = rs.data.topics;
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

