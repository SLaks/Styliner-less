/*jshint node: true, camelcase: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, noarg: true, undef: true, globalstrict: true*/
"use strict";
var Q = require('q');
var path = require('path');

var less = require('less');
var Styliner = require('styliner');

var parseLess = Q.nfbind(less.render.bind(less));

Styliner.styleFormats.less = function (source, filename) {
	return parseLess(source, { paths: [path.dirname(filename)] });
};
