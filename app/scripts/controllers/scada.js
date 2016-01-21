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
 	if($rootScope.islogin==null){
 		$rootScope.islogin = false; 	
 	}
 	$scope.login_msg="Sign in to start your session";
 	$scope.loginScada = function(){ 		
 		var credential = {username: $scope.scada_username, password: $scope.scada_password};
 		$http.post("/scadaone_api/public/authen/login", credential).success(function(data, status) {
 			if (data.statusLogin) {
 				$rootScope.islogin=true;
 				$rootScope.dataLogin = data;
 			}else{
 				$scope.login_msg="The username and password you entered don't match.";
 				$rootScope.islogin=false;
 			}
 		});
 	};
 	$scope.logoutScada = function(){ 		
 		$scope.login_msg="Sign in to start your session";
 		$rootScope.islogin=false;
 		$rootScope.dataLogin = null;
 	};
 	$scope.getSubstations=function(){
 		$http.get("/scadaone_api/rest/substation/getAll?orgId=1").then(function(dataSubs) {
 			$scope.listSubstations = dataSubs.data;
 		});
 	}
 });

