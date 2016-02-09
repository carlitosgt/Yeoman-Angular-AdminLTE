'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('MusicCtrl', function ($rootScope,$scope,$http) {
 	$rootScope.moduleName ="Music";
 	$rootScope.moduleNameDetails ="Get Album Mp3.Zing - Nhaccuatui";
 	$scope.getAlbum = function() {
 		$http.get("/api/getAlbumMp3?urlAlbum=" + $scope.urlAlbum)
 		.success(function(data) {
 			$scope.lstSongs = data;
 		})
 		.error(function(data) {
 			console.log('avcd');
 		});
 	}
 });
