'use strict';

var Angular = require('angular');
var State   = require('./state');

module.exports = Angular.module('postcard-create.create', [])
.config(State)
.name;
