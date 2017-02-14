describe('uniqueName directive', function () {

  beforeEach(module('smartPension', function($provide) {
    $provide.factory('apiService', function(){
      return {
        getCompanyByName: function() {}
      }
    })
  }));

  var $compile,
    $rootScope,
    $scope,
    apiService,
    $q,
    form;

  beforeEach(inject(function(
    _$compile_,
    _$rootScope_,
    _$q_,
    _apiService_
  ){
    apiService = _apiService_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $q = _$q_;
    $compile =_$compile_;
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.companyName" name="companyName" unique-company-name />' +
      '</form>'
    );
    $scope.model = { companyName: null };
    $compile(element)($scope);
    form = $scope.form;
  }));

  describe('WHEN company name is NOT unique', function() {
    beforeEach(function() {
      spyOn(apiService, 'getCompanyByName').and.returnValue($q.resolve());
    });

    it('should not pass', function() {
      form.companyName.$setViewValue('foodit');
      $scope.$apply();
      expect($scope.model.companyName).not.toEqual('foodit');
      expect(form.companyName.$valid).toBe(false);
    });
  });

  describe('WHEN company name IS unique', function() {
    beforeEach(function() {
      spyOn(apiService, 'getCompanyByName').and.returnValue($q.reject());
    });

    it('should pass', function() {
      form.companyName.$setViewValue('Smart Pension');
      $scope.$digest();
      expect($scope.model.companyName).toEqual('Smart Pension');
      expect(form.companyName.$valid).toBe(true);
    });
  });

});
