// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'gilxa1226.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://auth0:qwerty123456@ds151062.mlab.com:51062/mean_rsvp'
};
