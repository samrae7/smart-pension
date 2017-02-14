angular.module('smartPension')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/form/form.html',
      controller: 'FormController',
      controllerAs: 'vm'
    });
  }])
  .controller('FormController', ['apiService', '$location', FormController]);

function FormController(apiService, $location) {
  vm = this;

  vm.company = {
    name: '',
    legalStructure: '',
    registrationNumber: '',
    signatory: {},
    admin: {}
  };

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

  vm.serverErrors = [];

  var serverErrorMessages = {
    707: 'This company name is already in use',
    1607: 'The signatory email address is not a real email address.',
    2007: 'The admin email address is not a real email address.',
    2009: 'The administrator and signatory cannot have the same email address',
    1609: 'The administrator and signatory cannot have the same email address'
  };

  vm.onSubmit = function formControllerOnSubmit(form) {
    if (form.$valid) {
      apiService.postCompany(vm.company)
        .then(function (response) {
          $location.path('/success');
        })
        .catch(function(response) {
          var errorsArray = response.data.errors;
          vm.serverErrors = errorsArray.map(function(error, index, array){
            return{
              code: error.code.toString(),
              message: serverErrorMessages[error.code]
            }
          });
        });
    }
  };
}
