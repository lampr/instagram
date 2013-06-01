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

instagram.feed = function(callback){
	jsonp("https://api.instagram.com/v1/users/self/feed?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.me = function(user_id, callback){
	jsonp("https://api.instagram.com/v1/users/"+ user_id +"/media/recent/?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.popular = function(callback){
	jsonp("https://api.instagram.com/v1/media/popular?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.tag = function(tag_name, callback){
	jsonp("https://api.instagram.com/v1/tags/"+ tag_name +"/media/recent?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.follows = function(user_id, callback){
	jsonp("https://api.instagram.com/v1/users/"+ user_id +"/follows?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.followers = function(user_id, callback){
	jsonp("https://api.instagram.com/v1/users/"+ user_id +"/followed-by?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}

instagram.nearby = function(lat, lng, callback){
	jsonp("https://api.instagram.com/v1/media/search?lat="+lat+"&lng="+lng+"&?access_token="+ settings.access_token +"", {}, function(err, data){	
   		if (callback){
   			callback(err, data);
   		}
   	});
}


