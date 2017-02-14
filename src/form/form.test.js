describe('form', function () {

  beforeEach(module('smartPension'));

  var $controller,
    $httpBackend,
    apiService;

  beforeEach(inject(function(
    _$controller_,
    _$httpBackend_
  ){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    apiService = {
      postCompany: function() {}
    };
  }));

  describe('GIVEN the controller is instantiated', function () {
    var vm;

    beforeEach(function() {
      vm = $controller('FormController', {});
    });

    it('THEN it should be defined', function () {
      expect(vm).toBeDefined();
    });
  });

  describe('GIVEN the form is valid, WHEN onSubmit is called', function () {
    var vm,
      form,
      apiServicePostCompanySpy;

    beforeEach(function() {
      form = {
        $valid: true
      };
      apiServicePostCompanySpy = spyOn(apiService, 'postCompany');
      vm = $controller('FormController', {apiService: apiService});
      vm.company = {};
      $httpBackend.when('POST', 'https://api.dev.autoenrolment.co.uk/companies').respond({});
      vm.onSubmit(form);
    });

    it('THEN apiService.postCompany should be called', function () {
      expect(apiServicePostCompanySpy).toHaveBeenCalled();
    });
  });

  describe('GIVEN the form is NOT valid, WHEN onSubmit is called', function () {
    var vm,
      form,
      apiServicePostCompanySpy;

    beforeEach(function() {
      form = {
        $valid: false
      };
      apiServicePostCompanySpy = spyOn(apiService, 'postCompany');
      vm = $controller('FormController', {apiService: apiService});
      vm.company = {};
      $httpBackend.when('POST', 'https://api.dev.autoenrolment.co.uk/companies').respond({});
      vm.onSubmit(form);
    });

    it('THEN apiService.postCompany should NOT be called', function () {
      expect(apiServicePostCompanySpy).not.toHaveBeenCalled();
    });
  });
});
