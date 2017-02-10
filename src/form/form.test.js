describe('form', function () {

  beforeEach(module('smartPension'));
  beforeEach(module('foo'));

  var $controller,
    $compile,
    $templateCache,
    $rootScope,
    $scope;

  beforeEach(inject(function(
    $injector,
    _$controller_,
    _$compile_,
    _$templateRequest_,
    _$templateCache_,
    _$rootScope_
  ){
    $controller = _$controller_;
    $compile = _$compile_;
    $templateCache = _$templateCache_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  describe('GIVEN the controller is instatiated', function () {
    var vm;

    beforeEach(function() {
      vm = $controller('FormController', {$scope: $scope});
    });

    it('Should be defined', function () {
      expect(vm).toBeDefined();
    });
  });

  describe('GIVEN the form is compiled', function () {
    var vm,
      form,
      spy,
      $el;

    beforeEach(function() {
      vm = $controller('FormController');
      vm.stage = 1;
      spy = spyOn(vm, 'onClickNext');
      var template = $templateCache.get('src/form/form');
      console.log('t', template);
      form = $compile(template)($scope);
      $scope.$digest();
      $el = angular.element(form);
      console.log('e', $el);
      var button = $el.find('.test-button');
      console.log(button, 'b');
      button.triggerHandler('click');
      $scope.$digest();
    });

    // it('Should be defined', function () {
    //   expect(form).toBeDefined();
    // });

    it('Should call onClickNext', function () {
      expect(spy).toHaveBeenCalled();
    });
  });

});
