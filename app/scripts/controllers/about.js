'use strict';

/**
 * @ngdoc function
 * @name personalTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalTaskApp
 */
angular.module('personalTaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
