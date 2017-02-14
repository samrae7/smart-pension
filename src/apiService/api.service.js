angular.module('smartPension')
  .factory('apiService', ['$http', function($http) {

    var service = {};

    service.postCompany = function apiServicePostCompany(companyData) {
      var transformedCompanyData = service.transformCompanyData(companyData);
      var companyEndpoint = apiEndpoints.base + apiEndpoints.postCompany;
      return $http.post(
        companyEndpoint,
        transformedCompanyData
      );
    };

    service.getCompanyByName = function apiServiceGetCompanyByName(name) {
      return $http.get(apiEndpoints.base + apiEndpoints.companyByName + name);
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
    };

    return service;
  }]);
