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
  'ngTouch',
  'jkuri.gallery'
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
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl',
    controllerAs: 'profile'
  })
  .when('/scada', {
    templateUrl: 'views/scada.html',
    controller: 'ScadaCtrl',
    controllerAs: 'scada'
  })
  .when('/scada', {
    templateUrl: 'views/scada.html',
    controller: 'ScadaCtrl',
    controllerAs: 'scada'
  })
  .when('/scada', {
    templateUrl: 'views/scada.html',
    controller: 'ScadaCtrl',
    controllerAs: 'scada'
  })
  .otherwise({
    redirectTo: '/'
  });
});
