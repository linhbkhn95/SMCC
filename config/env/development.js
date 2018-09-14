/**
 * Development envisaronment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  port:1339,
  access_token:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdWNfYXR0dF9tb25pdG9yIiwiZXhwIjoxNTM4MTU0NDE1LCJpYXQiOjE1MzY5NDQ4MTV9.ZKOuQ5LFmdm6CtfFLEFBBJ1yTmk0s4ooiJ0LEMa7PlYHyzOWWzyUySDcTsItB0BJ2tzOqQdWP-qmA8NtKPfWRg",
  // models: {
  //   connection: 'someMongodbServer'
  // }
  // URL_PROCESSING: 'http://103.192.236.178:1338', //link BPSService
  keyword:"[{%22main_keyword%22:%22ch%C3%ADnh+ph%E1%BB%A7%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%C3%ADnh+s%C3%A1ch%22,%22require_keywords%22:%22vi%E1%BB%87t+nam%22,%22exclude_keywords%22:%22b%C3%A1n+h%C3%A0ng%22},{%22main_keyword%22:%22lu%E1%BA%ADt+ph%C3%A1p%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22ch%E1%BA%BF+%C4%91%E1%BB%99%22,%22require_keywords%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22c%E1%BB%99ng+s%E1%BA%A3n%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22d%C3%A2n+ch%E1%BB%A7%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%C6%B0%E1%BB%9Dng+l%E1%BB%91i%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22},{%22main_keyword%22:%22%C4%91%E1%BA%A3ng%22,%22require_keywords%22:%22%22,%22exclude_keywords%22:%22%22}]",
  URL_PROCESSING: 'http://localhost:1338', //link BPSService
  URL_PUBLIC_GET_DATA:'http://smcc.socials.vn'
};
