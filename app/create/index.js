'use strict';

const Angular = require('angular');

const Controller = require('./controller');
const State      = require('./state');

module.exports = Angular.module('postcard-create.create', [])
.controller('CreateCtrl', Controller)
.config(State)
.name;
