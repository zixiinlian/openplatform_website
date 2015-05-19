/// <reference path="E:\ProjectCode\openplatform\src\OpenPlatform.Web\Scripts/jquery-2.1.4.js" />
/// <reference path="E:\ProjectCode\openplatform\src\OpenPlatform.Web\Scripts/angular.js" />


'use strict';

(function (angular, $) {
    var app = angular.module('app', ['ngRoute']);
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
              templateUrl: '/app/views/main.html'
              // controller: 'MainCtrl'
          })
          .when('/center', {
              templateUrl: '/app/views/center.html'
              // controller: 'MainCtrl'
          })
          .when('/class', {
              templateUrl: '/app/views/class.html',
              // controller: 'ClassCtrl'
          })
            .when('/test', {
                templateUrl: '/mvc/demo',
                // controller: 'ClassCtrl'
            })
          .otherwise({
              redirectTo: '/'
          });

        //use the HTML5 History API
        //$locationProvider.html5Mode(true);
    }]);

    app.controller('contrl', ['$scope', '$location', function ($scope, $location) {

        //$scope.$root.$on('$locationChangeStart', function (e) {
        //    //e.stopPropagation();
        //    e.preventDefault();
        //    $scope.url = $location.url();
        //});

        $scope.testMvc = function () {
            $location.path('test');
        }

    }]);

})(angular, jQuery);