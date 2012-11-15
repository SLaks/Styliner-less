/*jshint node: true, camelcase: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, noarg: true, undef: true, globalstrict: true*/
"use strict";
var Q = require('q');

var less = require('less');
try {
	var Styliner = require('Styliner');
} catch (e) {
	// For local testing
	var Styliner = require('..');
	if (typeof Styliner.styleFormats !== "object")
		throw e;
}

Styliner.styleFormats.less = Q.nbind(less.render, less);
