var angular = require('angular');
require('angular-mocks');
var episodes = require('./episodes');

describe('episodes component', function () {
  beforeEach(function () {
    angular
      .module('fountainEpisodes', ['app/episodes/episodes.html'])
      .component('fountainEpisodes', episodes);
    angular.mock.module('fountainEpisodes');
  });
  it('should render 3 elements <fountain-episodes>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', 'app/episodes/episodes.json').respond(episodesJson);
    var element = $compile('<fountain-episodes></fountain-episodes>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var episodes = element.find('fountain-episode');
    expect(episodes.length).toEqual(3);
  }));
});
