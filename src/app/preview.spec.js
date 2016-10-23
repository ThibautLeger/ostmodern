var angular = require('angular');
require('angular-mocks');
var preview = require('./preview');

describe('preview component', function () {
  beforeEach(function () {
    angular
      .module('fountainPreview', ['app/preview.html'])
      .component('fountainTitle', preview);
    angular.mock.module('fountainPreview');
  });

  it('should render \'Allo, \'Allio!', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-preview></fountain-preview>')($rootScope);
    $rootScope.$digest();
    var preview = element.find('h1');
    expect(preview.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
