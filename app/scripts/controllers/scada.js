'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:ScadaCtrl
 * @description
 * # ScadaCtrl
 * Controller of the yeomanAdminLteApp
 */
 angular.module('yeomanAdminLteApp')
 .controller('ScadaCtrl', function ($http,$rootScope,$scope) {
 	$rootScope.moduleName ="Scada";
 	$rootScope.islogin=false; 	
 	$scope.loginScada = function(){ 		
 		var credential = {username: $scope.scada_username, password: $scope.scada_password};
 		$http.post("/scadaone_api/public/authen/login", credential).success(function(data, status) {
 			if (data.statusLogin) {
 				$rootScope.islogin=true;
 				$rootScope.dataLogin = data;
 			}else{
 				$rootScope.islogin=false;
 			}
 		});
 	};
 	$scope.logoutScada = function(){ 		
 		$rootScope.islogin=false;
 		$rootScope.dataLogin = null;
 	};
 	$scope.getSubstations=function(){
 		$http.get("/scadaone_api/rest/substation/getAllOrgPath?orgId=1").then(function(response) {
 			$scope.listSubstations = response;
 		});
 	}
 });

