var angular = require('angular');
require('angular-mocks');
var recommended = require('./recommended');

describe('recommended component', function () {
  beforeEach(function () {
    angular
      .module('fountainRecommended', ['app/recommendeds/recommended.html'])
      .component('fountainRecommended', recommended);
    angular.mock.module('fountainRecommended');
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
    var element = $compile('<fountain-recommended recommended="fixture"></fountain-recommended>')($scope);
    $scope.$digest();
    var recommended = element.find('h3');
    expect(recommended.html().trim()).toEqual('Gulp');
  }));
});
