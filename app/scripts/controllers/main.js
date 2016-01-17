'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('MainCtrl', function ($rootScope,$scope) {
 	$scope.users = [
	 	{thumb: '/images/adminlte/photo1.png', img: '/images/adminlte/photo1.png', description: 'Image 1'},
	 	{thumb: '/images/adminlte/photo2.png', img: '/images/adminlte/photo2.png', description: 'Image 2'},
	 	{thumb: '/images/adminlte/photo3.jpg', img: '/images/adminlte/photo3.jpg', description: 'Image 3'},
	 	{thumb: '/images/adminlte/photo4.jpg', img: '/images/adminlte/photo4.jpg', description: 'Image 4'}
 	];
 	$rootScope.moduleName ="Dashboard";
 	$rootScope.moduleNameDetails ="This is the Dashboard view";
 });
