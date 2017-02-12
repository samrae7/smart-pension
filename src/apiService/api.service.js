angular.module('smartPension')
  .factory('apiService', ['$http', function($http) {

    var service = {};

    service.postCompany = function apiServicePostCompany(companyData) {
      var transformedCompanyData = service.transformCompanyData(companyData);
      return $http.post(
        'https://api.sandbox.autoenrolment.co.uk/companies',
        transformedCompanyData
      );
    //TODO - handle api response and show success or error
    //TODO - put endpoint in app constant
    };
    //TODO - move transformer to its own service
    service.transformCompanyData = function apiServiceTransformCompanyData(companyData) {
      return {
        name: companyData.name,
        registration_number: companyData.registrationNumber,
        legal_structure: companyData.legalStructure,
        signatories: [companyData.signatory],
        admins: [companyData.admin]
      };
    }

    return service;
  }]);
