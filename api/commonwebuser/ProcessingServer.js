/**
 *  @author LinhTD
 *  @description Nhận xử lý ở Processing Server
 */
var request = require('request');

module.exports = {

    callAPI: function (obj, done) {
        serviceTest.requsetPost(obj,'/front/postRequest', function (err, rs) {
          // console.log('serviceTest.requsetPost(obj/front/postRequest',err,rs)
            if (err) {
                done(err, null)
            }
            try {
                done(null, rs)

            } catch (error) {
                done(error, null)
            }
        })
    },

    /**
     * @argument model
     * @description API thực thi model
     */

    callAPIWithUrl: function (obj,done) {
      serviceTest.requsetPost(obj,'/front/getRequest', function (err, rs) {
          if (err) {
              done(err, null)
          }
          try {
              done(null, rs)

          } catch (error) {
              done(error, null)
          }


      })
    },

    postFormData: function (url, formdata, done) {
        request({
            url: sails.config.URL_PROCESSING + url,
            method: 'POST',
            formData: formdata
        }, function (err, resdata) {

            if (err) {
                sails.log.error('postFormData: Error', err);
                done(null, err)
            } else {
                done(null, resdata.body);

            }

        });
    }
}
