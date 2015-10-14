'use strict';

//---------------------------------------------------------------------------
// INIT
//---------------------------------------------------------------------------

var fs = require('fs');

var config = require('./gulp/_config');

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(config.plugins);

//---------------------------------------------------------------------------
// HELPERS
//---------------------------------------------------------------------------

function getTasks() {
    var files = fs.readdirSync('./gulp');

    // Remove config
    files.shift();

    return files.map(function (file) {
        return file.substring(0, file.indexOf('.'));
    });
}

//---------------------------------------------------------------------------
// RUN
//---------------------------------------------------------------------------

var tasks = getTasks();

tasks.forEach(function (task) {
    require('./gulp/' + task)(gulp, $, config[task]);
});
