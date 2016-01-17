'use strict';

/**
 * @ngdoc overview
 * @name yeomanAdminLteApp
 * @description
 * # yeomanAdminLteApp
 *
 * Main module of the application.
 */
 angular
 .module('yeomanAdminLteApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/technical', {
    templateUrl: 'views/technical.html',
    controller: 'TechnicalCtrl',
    controllerAs: 'technical'
  })
  .when('/news', {
    templateUrl: 'views/news.html',
    controller: 'NewsCtrl',
    controllerAs: 'news'
  })
  .otherwise({
    redirectTo: '/'
  });
});
