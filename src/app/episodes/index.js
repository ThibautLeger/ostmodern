var angular = require('angular');

var episode = require('./episode');
var episodes = require('./episodes');

var episodesModule = 'episodes';

module.exports = episodesModule;

angular
  .module(episodesModule, [])
  .component('fountainEpisode', episode)
  .component('fountainEpisodes', episodes);
