'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:FilmCtrl
 * @description
 * # FilmCtrl
 * Controller of the yeomanAdminLteApp
 */
angular.module('yeomanAdminLteApp')
  .controller('FilmCtrl', function ($rootScope,$scope,$http) {
  	$rootScope.moduleName ="Film";
 	$rootScope.moduleNameDetails ="This is the Film view";
    $scope.getMovies = function(){
 		$http.get("/api/news/movies").then(function(dataSubs) {
 			$scope.newMovies = dataSubs.data;
 		});

 	}
  });
