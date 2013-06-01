/**
 * Module dependencies
 */

var jsonp = require('jsonp');

module.exports = instagram;

/**
 * Main Function
 */
 
 
function instagram (access_token, scope, callback) {  
   	jsonp("https://api.instagram.com/v1/media/"+ scope +"?access_token="+ access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}
