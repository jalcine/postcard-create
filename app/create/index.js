'use strict';

var Angular    = require('angular');
var State      = require('./state');
var Controller = require('./controller');

module.exports = Angular.module('postcard-create.create', [])
.controller('CreateCtrl', Controller)
.config(State)
.name;
