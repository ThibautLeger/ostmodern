var angular = require('angular');

var drama = require('./drama');
var dramas = require('./dramas');

var dramasModule = 'dramas';

module.exports = dramasModule;

angular
  .module(dramasModule, [])
  .component('fountainDrama', drama)
  .component('fountainDramas', dramas);
