/**
 * RestfulHandler
 *
 * @description :: Server-side logic for managing Fronts.
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers

 giang.ngo: xu ly call request server to server, 
		addSessionInfo: add them cac thong tin session vao request
	
 */

var request = require('request');
var LogHelper = require('./LogHelper.js');
var jsonoutput = require('./OutputInterface.js');

const TAG_CLASS = 'RestfulHandler'

module.exports = {
	post: function callPost(url, body) {
		// var TAG_FUNC = 'callPost';
		// var infoLog = 'url:' + url + ',' + body;
		// sails.log.debug(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.START, infoLog));
		return new Promise(function (resolve, reject) {
			try {
				var bodyStr = JSON.stringify(body);
				var headers = {
					'Content-Type': 'application/json'
				};
				request({
					url: url,
					method: 'POST',
					json: body
				}, function (err, res) {

					if (err) {
						// sails.log.error(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'error', err));
						reject(err)
					} else {
						// sails.log.debug(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'responseData', res.body));
						resolve(res.body);
					}

				});
			} catch (err) {
				// sails.log.error(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'error', err));
				reject(err);
			}
		});

	},
	get: function callGet(url) {
		// var TAG_FUNC = 'callPost';
		// var infoLog = 'url:' + url;
		// sails.log.info(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.START, infoLog));

		return new Promise(function (resolve, reject) {
			try {
				request({
					url: url,
					method: 'GET',
				}, function (err, res) {
					if (err) {
						// sails.log.error(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'error', err));
						reject(err)
					} else {
						// sails.log.debug(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'responseData', res.body));
						resolve(res.body);
					}
				});
			} catch (err) {
				// sails.log.error(LogHelper.Add(TAG_CLASS, TAG_FUNC, LogHelper.FINISH, 'error', err));
				reject(err);
			}
		});
	},
	addSessionInfo: function (data, req) {
		data.TLID = req.session.userinfo.TLID;
		data.ROLE = req.session.userinfo.ROLECODE;
		data.DBCODE = req.session.userinfo.DBCODE;
		data.MBCODE = req.session.userinfo.MBCODE;
		return data;
	},
	convertBPSData: function (result) {
		try {
			if (result.EC == 0) {
				result.DT = ConvertData.convert_to_Object(result.DT.ret);
			}
		} catch (error) {
			sails.log.error(error)
		}
		return result;
	},
}