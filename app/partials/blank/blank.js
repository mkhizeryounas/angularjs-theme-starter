'use strict';

angular.module('myApp.blank', ['ngRoute'])

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('blank', {
    templateUrl: 'partials/blank/blank.html',
    url: '/blank',
    controller: "blankCtrl"
  })
})


.controller('blankCtrl', [function() {

}]);