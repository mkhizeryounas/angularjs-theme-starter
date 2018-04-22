'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.home',
  'myApp.view2',
  'myApp.version',
  'myApp.blank',
]).

config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
})

app.controller('mainCtrl', ['$location', '$rootScope', '$scope', function($location, $rootScope, $scope) {
  $rootScope.go = (p) => {
    $location.path(p);
  }
  $scope.currentNav= (link) => {
    if($location.path() == link) {
      return true;
    }
    return false;    
  }
}]);