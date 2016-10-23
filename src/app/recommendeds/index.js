var angular = require('angular');

var recommended = require('./recommended');
var recommendeds = require('./recommendeds');

var recommendedsModule = 'recommendeds';

module.exports = recommendedsModule;

angular
  .module(recommendedsModule, [])
  .component('fountainRecommended', recommended)
  .component('fountainRecommendeds', recommendeds);
