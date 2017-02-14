angular.module('smartPension')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/success', {
      templateUrl: '/success/success.html'
    });
  }])
