angular.module('smartPension')
  .directive('uniqueCompanyName', ['apiService', '$q', function(apiService, $q) {
    return {
      require: 'ngModel',
      link: function(formScope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$asyncValidators.uniqueCompanyName = function(modelValue, viewValue) {
          var deferred = $q.defer();
          apiService.getCompanyByName(viewValue)
            .then(function(response) {
              deferred.reject();
            })
            .catch(function(error) {
              deferred.resolve();
            });
          return deferred.promise;
        };
      }
    };
  }]);
