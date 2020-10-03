"use strict";

var semver = require('semver');

var colors = require('colors/safe');

var _require = require('./package'),
    nodeVersion = _require.engines.node;

if (!semver.satisfies(process.version, nodeVersion)) {
  process.emitWarning(colors.red("\n      For this task we are strictly recomend you to use node ".concat(nodeVersion, ".\n      Now you are using node ").concat(process.version, ", if you are using any of features that not supported by node ").concat(nodeVersion, ", score won't be submitted\n    ")));
}