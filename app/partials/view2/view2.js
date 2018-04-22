'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('view2', {
    templateUrl: 'partials/view2/view2.html',
    url: '/view2',
    controller: "view2Ctrl"
  })
})

.controller('view2Ctrl', ['$location', function($location) {
  
}]);