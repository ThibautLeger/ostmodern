module.exports = {
  template: require('./recommendeds.html'),
  controller: RecommendedsController
};

/** @ngInject */
function RecommendedsController($http) {
  var vm = this;

  $http
    .get('app/recommendeds/recommendeds.json')
    .then(function (response) {
      vm.recommendeds = response.data;
    });
}
