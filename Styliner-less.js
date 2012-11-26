/*jshint node: true, camelcase: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, noarg: true, undef: true, globalstrict: true*/
"use strict";
var Q = require('q');
var qfs = require('q-io/fs');

var less = require('less');
try {
	var Styliner = require('styliner');
} catch (e) {
	// For local testing
	var Styliner = require('..');
	if (typeof Styliner.styleFormats !== "object")
		throw e;
}

var parseLess = Q.nbind(less.render, less);
Styliner.styleFormats.less = function (source, path) {
	return parseLess(source, { paths: [qfs.directory(path)] });
};
