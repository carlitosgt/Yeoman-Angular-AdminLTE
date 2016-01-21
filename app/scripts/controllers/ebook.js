'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:EbookCtrl
 * @description
 * # EbookCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('EbookCtrl', function ($rootScope,$scope, $http) {  	
 	$rootScope.moduleName ="IT Ebooks";

 	$scope.searchBooks=function(){
 		$http.get("http://it-ebooks-api.info/v1/search/"+$scope.key).then(function(dataSubs) {
 			$scope.listResult = dataSubs.data;
 		});
 	}
 	$scope.getDetailsBook=function(idBook){
 		$http.get("http://it-ebooks-api.info/v1/book/"+idBook).then(function(dataSubs) {
 			$scope.detailsBook = dataSubs.data;
 			$('#details_book').modal('show');
 		});
 	}
 });
