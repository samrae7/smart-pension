describe('apiService', function () {

  beforeEach(module('smartPension'));

  var apiService,
    $httpBackend,
    $rootScope,
    $scope,
    $q;

  beforeEach(inject(function(
    _apiService_,
    _$httpBackend_,
    _$rootScope_,
    _$q_
  ){
    apiService = _apiService_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $q = _$q_;
  }));

  describe('WHEN postCompany is called', function () {
    var result,
      mockResponse;

    beforeEach(function() {
      mockResponse = {foo: 'bar'};

      var mockData = {
        name: 'fooBusiness',
        registrationNumber: 1234,
        legalStructure: 'PLC',
        signatory: {},
        admin: {}
      };

      $httpBackend.whenPOST('https://api.sandbox.autoenrolment.co.uk/companies').respond(mockResponse);

      apiService.postCompany(mockData)
        .then(function(response) {
          result = response.data;
        });
    });
    beforeEach(function() {
      $httpBackend.flush();
    });

    it('THEN it should return the response from the server', function () {
      expect(result).toEqual(mockResponse);
    });
  });

  describe('WHEN transformCompanyData is called', function () {
    var transformedData,
      expectedResult;

    beforeEach(function() {
      var mockData = {
        name: 'fooBusiness',
        registrationNumber: 1234,
        legalStructure: 'PLC',
        signatory: {},
        admin: {}
      };

      expectedResult = {
        name: 'fooBusiness',
        registration_number: 1234,
        legal_structure: 'PLC',
        signatories: [{}],
        admins: [{}]
      };

      transformedData = apiService.transformCompanyData(mockData);
    });

    it('THEN it should give the expected result', function () {
      expect(transformedData).toEqual(expectedResult);
    });
  });
});
