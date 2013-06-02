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

#### Feed

```js

instagram.feed(function(err, data){
 console.log(data);
});

```

#### Media

```js

instagram.media('MEDIA-ID', function(err, data){
 console.log(data);
});

```

#### Tag

```js
instagram.tag('TAG-NAME', function(err, data){
 console.log(data);
});

```

## License

MIT