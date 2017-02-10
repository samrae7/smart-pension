angular.module('smartPension')
  .factory('apiService', ['$http', function($http) {

    var service = {};

    service.postCompany = function apiServicePostCompany(companyData) {
      var transformedCompanyData = transformCompanyData(companyData);

      return $http.post(
        'https://api.dev.autoenrolment.co.uk/companies',
        transformedCompanyData
      );
    //TODO - handle api response and show success or error
    };

    function transformCompanyData(companyData) {
      return {
        name: companyData.name,
        registration_number: companyData.registrationNumber,
        legal_structure: companyData.legalStructure,
        signatories: [companyData.signatory],
        admin: [companyData.admin]
      };
    }

    return service;
  }]);
