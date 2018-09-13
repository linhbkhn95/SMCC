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
  // models: {
  //   connection: 'someMongodbServer'
  // }
  // URL_PROCESSING: 'http://103.192.236.178:1338', //link BPSService

  URL_PROCESSING: 'http://localhost:1338', //link BPSService
  URL_PUBLIC_GET_DATA:'http://smcc.socials.vn'
};
