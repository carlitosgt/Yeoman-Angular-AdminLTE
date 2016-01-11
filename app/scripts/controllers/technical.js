'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:TechnicalCtrl
 * @description
 * # TechnicalCtrl
 * Controller of the yeomanAdminLteApp
 */
angular.module('yeomanAdminLteApp')
  .controller('TechnicalCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.moduleName ="Technical";
    $rootScope.moduleNameDetails ="This is the technical view";
  });
