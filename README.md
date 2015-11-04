# elixir-remove

## Installation
----

```sh
$ npm install elixir-remove
```

## Usage
----

Require the extension and call it using mix.remove().

```javascript
var elixir = require('laravel-elixir');
require('elixir-remove');

elixir(function(mix)
{
	// single 
    mix.remove('src');
 
    // multiple 
    mix.remove(['src/css', 'src/js', 'src/img']);	
});
```

Run gulp.

```sh
$ gulp
```