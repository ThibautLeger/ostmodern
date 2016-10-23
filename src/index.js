var angular = require('angular');

var episodesModule = require('./app/episodes/index');
var dramasModule = require('./app/dramas/index');
var recommendedsModule = require('./app/recommendeds/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var preview = require('./app/preview');
var footer = require('./app/footer');

require('./index.scss');

angular
  .module('app', [episodesModule, dramasModule, recommendedsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainPreview', preview)
  .component('fountainFooter', footer);
