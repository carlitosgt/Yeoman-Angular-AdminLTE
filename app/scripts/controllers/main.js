'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('MainCtrl', function ($rootScope,$scope, $document) {
 	$rootScope.moduleName ="Home";
 	$rootScope.moduleNameDetails ="This is the Home view";
 	$scope.images = [
      {thumb: 'images/adminlte/tech-1.PNG', img: 'images/adminlte/tech-1.PNG'},
          {thumb: 'images/adminlte/tech-2.PNG', img: 'images/adminlte/tech-2.PNG'},
          {thumb: 'images/adminlte/tech-3.PNG', img: 'images/adminlte/tech-3.PNG'},
          {thumb: 'images/adminlte/tech-4.PNG', img: 'images/adminlte/tech-4.PNG'}
    ];
 });
