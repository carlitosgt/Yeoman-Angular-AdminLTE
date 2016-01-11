'use strict';

/**
 * @ngdoc service
 * @name yeomanAdminLteApp.TechnicalFactory
 * @description
 * # TechnicalFactory
 * Factory in the yeomanAdminLteApp.
 */
 angular.module('yeomanAdminLteApp')
 .factory('TechnicalFactory', function ($resource) {
    // Service logic
    // ...

    var data = $resource('https://jsonplaceholder.typicode.com/comments/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
    return data;
  });
