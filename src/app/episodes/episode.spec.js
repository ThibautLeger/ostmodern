var angular = require('angular');
require('angular-mocks');
var episode = require('./episode');

describe('episode component', function () {
  beforeEach(function () {
    angular
      .module('fountainEpisode', ['app/episodes/episode.html'])
      .component('fountainEpisode', episode);
    angular.mock.module('fountainEpisode');
  });

  it('should render Gulp', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    var element = $compile('<fountain-episode episode="fixture"></fountain-episode>')($scope);
    $scope.$digest();
    var episode = element.find('h3');
    expect(episode.html().trim()).toEqual('Gulp');
  }));
});
