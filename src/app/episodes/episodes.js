module.exports = {
  template: require('./episodes.html'),
  controller: EpisodesController
};

/** @ngInject */
function EpisodesController($http) {
  var vm = this;

  $http
    .get('app/episodes/episodes.json')
    .then(function (response) {
      vm.episodes = response.data;
    });
}
