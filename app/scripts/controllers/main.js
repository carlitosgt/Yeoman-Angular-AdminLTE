'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAdminLteApp
 */
angular.module('yeomanAdminLteApp')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.moduleName ="Main";
    $rootScope.moduleNameDetails ="This is the main view";
  });
