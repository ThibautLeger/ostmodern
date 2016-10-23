var angular = require('angular');
require('angular-mocks');
var dramas = require('./dramas');

describe('dramas component', function () {
  beforeEach(function () {
    angular
      .module('fountainDramas', ['app/dramas/dramas.html'])
      .component('fountainDramas', dramas);
    angular.mock.module('fountainDramas');
  });
  it('should render 3 elements <fountain-dramas>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', 'app/dramas/dramas.json').respond(dramasJson);
    var element = $compile('<fountain-dramas></fountain-dramas>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var dramas = element.find('fountain-drama');
    expect(dramas.length).toEqual(3);
  }));
});
