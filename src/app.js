'use strict';

angular.module('smartPension', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'ngMdIcons'
])
  .constant('apiEndpoints', {
    base: 'https://api.sandbox.autoenrolment.co.uk',
    postCompany: '/companies',
    companyByName: '/companies/by_name?name='
  });
