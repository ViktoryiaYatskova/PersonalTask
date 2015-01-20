'use strict';

/**
 * @ngdoc function
 * @name personalTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalTaskApp
 */
angular.module('personalTaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
