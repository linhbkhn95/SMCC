var redux = require('redux');
var auth = require('./auth.js');
 var reducer = redux.combineReducers ({username,auth,settings,shoppingCart});
 module.exports = reducer;
