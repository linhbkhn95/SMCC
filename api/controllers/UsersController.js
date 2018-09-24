/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
var lodash = require('lodash')
module.exports = {
    get_all:function(req,res){

        try {
            // Post.find({where:{sort:"createdAt DESC"}}).where(dataQuery).paginate({ limit: pagesize, page: page }).exec(function(err,list){
            let {pagesize,page} = req.body
            Users.find().paginate({ limit: pagesize, page: page }).exec((err,listuser)=>{
                if(err){
                    return res.send(Ioutput.errServer(err));
                }
                return res.send(Ioutput.success(listuser));
            })
        } catch (error) {
            return res.send(Ioutput.errServer(error));

        }
     
    }
};

