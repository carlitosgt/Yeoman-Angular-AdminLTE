'use strict';

describe('Controller: ScadaCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAdminLteApp'));

  var ScadaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScadaCtrl = $controller('ScadaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScadaCtrl.awesomeThings.length).toBe(3);
  });
});
