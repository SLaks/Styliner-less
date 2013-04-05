/*jshint node: true, camelcase: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, noarg: true, undef: true, globalstrict: true*/
"use strict";
var Q = require('q');
var path = require('path');

var less = require('less');

var parseLess = Q.nfbind(less.render.bind(less));

module.exports = function setupLess(Styliner) {
	Styliner.styleFormats.less = function (source, path) {
		return parseLess(source, { paths: [path.dirname(path)] });
	};
}