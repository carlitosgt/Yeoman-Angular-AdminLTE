'use strict';

/**
 * @ngdoc function
 * @name yeomanAdminLteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAdminLteApp
 */
angular.module('yeomanAdminLteApp')
    .controller('MainCtrl', function ($rootScope, $scope, $document) {
    $rootScope.moduleName = "Home";
    $rootScope.moduleNameDetails = "This is the Home view";
    $scope.images = [
        {
            thumb: 'images/adminlte/tech-1.png',
            img: 'images/adminlte/tech-1.png'
        },
        {
            thumb: 'images/adminlte/tech-2.png',
            img: 'images/adminlte/tech-2.png'
        },
        {
            thumb: 'images/adminlte/tech-3.png',
            img: 'images/adminlte/tech-3.png'
        },
        {
            thumb: 'images/adminlte/tech-4.png',
            img: 'images/adminlte/tech-4.png'
        }
    ];
});
