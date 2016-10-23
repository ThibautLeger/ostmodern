var angular = require('angular');
require('angular-mocks');
var drama = require('./drama');

describe('drama component', function () {
  beforeEach(function () {
    angular
      .module('fountainDrama', ['app/dramas/drama.html'])
      .component('fountainDrama', drama);
    angular.mock.module('fountainDrama');
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
    var element = $compile('<fountain-drama drama="fixture"></fountain-drama>')($scope);
    $scope.$digest();
    var drama = element.find('h3');
    expect(drama.html().trim()).toEqual('Gulp');
  }));
});
