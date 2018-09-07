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

module.exports = {
      get_all_info:function(req,res){
        try {
               var data = {
                  "access_token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdWNfYXR0dF9tb25pdG9yIiwiZXhwIjoxNTM3NTI2MjY4LCJpYXQiOjE1MzYzMTY2Njh9.oBe7m_tAZIMFrOpRinYCdIBabKgfZSE15YHWrC2sJsNtmYLIiV0U0BXmbc_e4UOvPv4K584Yn0nPzJUCEPzQdA",
                  "action":"/user/get-all-info"
                };



            processingserver.callAPIWithUrl(data, async function (err, rs) {

               if (rs.code == 0) {
                //  sails.log.info('data',rs)
                 let dt  =rs.data.topics;
                //
                var listuser = lodash.filter(dt, function (item) {

                  return item.topic_type==0;
               });
                  return res.send(Ioutput.success(listuser));
                }
                else {

                  return res.send(Ioutput.errServer(dt));

                    // return res.send(rs);
                }



          });
        } catch (error) {
          sails.log.error(error);
          return res.send(Ioutput.errServer(error));
      }
    }
};

