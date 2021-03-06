'use strict';

/**
 * @ngdoc overview
 * @name personalTaskApp
 * @description
 * # personalTaskApp
 *
 * Main module of the application.
 */
angular
  .module('personalTaskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
