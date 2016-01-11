'use strict';

describe('Service: TechnicalFactory', function () {

  // load the service's module
  beforeEach(module('yeomanAdminLteApp'));

  // instantiate service
  var TechnicalFactory;
  beforeEach(inject(function (_TechnicalFactory_) {
    TechnicalFactory = _TechnicalFactory_;
  }));

  it('should do something', function () {
    expect(!!TechnicalFactory).toBe(true);
  });

});
