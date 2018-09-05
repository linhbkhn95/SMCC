var request = require('request');
module.exports = {



  getToken: function (code, done) {

    request({
      url: sails.config.URL_RESOURCE + 'oauth/token',
      method: 'POST',

      form: {
        client_id: sails.config.SSO_CLIENTID,
        client_secret: sails.config.SSO_CLIENTSECRET,
        grant_type: sails.config.SSO_CLIENTGRANTTYPE,
        redirect_uri: sails.config.URL_APP + 'auth/allow',
        code: code
      }
    }, function (resCode, res) {
      // sails.log.debug('getToken.:Result', res ? res.body : null);
      var json = JSON.parse(res.body);
      if (resCode) {
        done('resCode', null);
      }
      Oauth2.getInfo(json.access_token, function (err, user) {
        done(null, user, res.body);
      });
    });
  },
  requsetResrc: function (access_token, urlApi, body, method, done) {

    if (method == 'POST') {
      Oauth2.requsetPost(access_token, body, urlApi, function (err, rs) {
        try {
          JSON.parse(rs);
          done(null, rs);
        } catch (e) {
          //  sails.log.error("requsetResrc.:requsetPost.:not JSON.:"+rs, e);
          done('Error', null);
        }
      })
    }
    else {
      Oauth2.requsetPost(access_token, body, urlApi, function (err, rs) {
        done(null, rs);
      })
    }
  },
  requsetPost: function (body, urlApi, done) {
    request({
      url: sails.config.URL_PROCESSING + urlApi,
      method: 'POST',
      // gzip: !(sails.config.DISABLE_GZIP_PROCESSING || false),
      // timeout: sails.config.TIMEOUT_PROCESSING || (5 * 60 * 1000),
      json: body

    }, function (err, res) {
      if (err) {
        sails.log('err',sails.config.URL_PROCESSING + urlApi, err);
        return done(null, err)
      }
      try {
        return done(null, res.body);
      } catch (error) {
        return done(null, error)
      }

    });
  },
  requesetGet: function (urlApi,done) {
    console.log('url',sails.config.URL_PROCESSING + urlApi)
    request.get(sails.config.URL_PROCESSING + urlApi, {

    }, function (err, res) {
      if (res.body)
        done(null, res.body);
      else {
        // sails.log.info('requesetGet.:Error', err,res);
        done('Error', res);
      }
    });
  },
  getInfo: function (access_token, done) {
    request.get(sails.config.URL_RESOURCE + 'api/info', {
      'auth': {
        'bearer': access_token
      }
    }, function (err, res) {
      if (res.body)
        done(null, res.body);
      else {
        sails.log.error('getInfo.:Error', err);
        done('Error', res);
      }
    });
  }
}

