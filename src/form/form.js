angular.module('smartPension')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/form/form.html',
      controller: 'FormController',
      controllerAs: 'vm'
    });
  }])
  .controller('FormController', ['apiService', FormController]);

function FormController(apiService) {
  vm = this;

  vm.company = {
    name: '',
    legalStructure: '',
    registrationNumber: '',
    signatory: {},
    admin: {}
  };

  vm.stage = 1;
  vm.clickedNext = {};
  vm.legalStructures = [
    'Limited Company',
    'Limited Partnership',
    'Limited Liability Partnership',
    'Unincorporated Association',
    'Ordinary Business Partnership',
    'Sole Trader',
    'Charity',
    'Other'
  ];

  vm.onClickNext = function formControllerOnClickNext(form) {
    vm.clickedNext[form.$name] = true;
    if(form.$valid) {
      vm.stage += 1;
    }
  };

  vm.goBack = function formControllerGoBack() {
    vm.stage -= 1;
  };

  vm.onSubmit = function(form) {
    if (form.$valid) {
      apiService.postCompany(vm.company);
    }
  };
}
