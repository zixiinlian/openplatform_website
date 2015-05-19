'use strict';

/**
 * @ngdoc overview
 * @name angularDemoApp
 * @description
 * # angularDemoApp
 *
 * Main module of the application.
 */
var ManagementApp = angular.module('managementApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  ManagementApp.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        // controller: 'MainCtrl'
      })
      .when('/center', {
        templateUrl: 'views/center.html'
        // controller: 'MainCtrl'
      })
      .when('/class', {
        templateUrl: 'views/class.html',
        // controller: 'ClassCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      //use the HTML5 History API
      $locationProvider.html5Mode(true);
  }]);
