var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    del = require('del');


var Task = elixir.Task;

elixir.extend('remove', function(paths) 
{
	new Task('remove', function() 
	{
    	return del(paths);
    })
    .watch(paths);
});