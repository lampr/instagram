instagram
=========

### What It Is

A simple helper component that makes communicating with the Instagram API.

### Setup
```js
var instagram = require('instagram');

instagram('YOUR-ACCESS-TOKEN');	
```
### Example
```js
instagram.popular(function(err, data){
 console.log(data);
});
```
### Available Methods

```js
//Feed
instagram.feed(function(err, data){
 console.log(data);
});

//Media
instagram.media('MEDIA-ID', function(err, data){
 console.log(data);
});

//Specific User's Photos
instagram.user('USER-ID', function(err, data){
 console.log(data);
});

//Tag
instagram.tag('TAG-NAME', function(err, data){
 console.log(data);
});

//Followers
instagram.followers('USER-ID', function(err, data){
 console.log(data);
});

//Followings
instagram.follow('USER-iD', function(err, data){
 console.log(data);
});

//Nearby
instagram.nearby('LAT', 'LNG' function(err, data){
 console.log(data);
});
```

## License

MIT