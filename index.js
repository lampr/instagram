/**
 * Module dependencies
 */

var jsonp = require('jsonp');

module.exports = instagram;

/**
 * Main Functions
 */
 

var settings = {
	access_token: function(token){
		return token;
	}, 
	client_id: function(client_id){
		return client_id;
	}
}

function instagram (token, client_id) {
	settings.access_token = token
}

instagram.media = function(media_id, callback){
	jsonp("https://api.instagram.com/v1/media/"+ media_id +"?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}