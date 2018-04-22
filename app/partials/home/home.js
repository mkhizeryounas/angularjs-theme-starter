'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('home', {
    templateUrl: 'partials/home/home.html',
    url: '/home',
    controller: "homeCtrl"
  })
})

.controller('homeCtrl', ['$location', function($location) {
  
}]);