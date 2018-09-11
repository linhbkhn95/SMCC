var redux = require('redux');
var auth = require('./auth.js');
 var reducer = redux.combineReducers ({auth});
 module.exports = reducer;
