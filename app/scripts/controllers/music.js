'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('MusicCtrl', function () {
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
