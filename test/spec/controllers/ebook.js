'use strict';

describe('Controller: EbookCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAdminLteApp'));

  var EbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EbookCtrl = $controller('EbookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EbookCtrl.awesomeThings.length).toBe(3);
  });
});
