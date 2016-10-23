module.exports = {
  template: require('./dramas.html'),
  controller: DramasController
};

/** @ngInject */
function DramasController($http) {
  var vm = this;

  $http
    .get('app/dramas/dramas.json')
    .then(function (response) {
      vm.dramas = response.data;
    });
}
