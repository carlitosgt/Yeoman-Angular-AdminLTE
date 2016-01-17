'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('NewsCtrl', function ($rootScope,$scope, $http) {
 	$rootScope.moduleName ="News";
 	$rootScope.moduleNameDetails ="This is the news view";
 	// $http.get("http://localhost:8080/news_api")
 	// .success(function(data) {
 	// 	console.log('avc');
 	// })
 	// .error(function(data){
 	// 	console.log('avcd');
 	// });
 });
