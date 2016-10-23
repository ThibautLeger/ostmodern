var angular = require('angular');
require('angular-mocks');
var recommendeds = require('./recommendeds');

describe('recommendeds component', function () {
  beforeEach(function () {
    angular
      .module('fountainRecommendeds', ['app/recommendeds/recommendeds.html'])
      .component('fountainRecommendeds', recommendeds);
    angular.mock.module('fountainRecommendeds');
  });
  it('should render 3 elements <fountain-recommendeds>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', 'app/recommendeds/recommendeds.json').respond(recommendedsJson);
    var element = $compile('<fountain-recommendeds></fountain-recommendeds>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var recommendeds = element.find('fountain-recommended');
    expect(recommendeds.length).toEqual(3);
  }));
});
