'use strict';

angular.module('smartPension', [
  'ngRoute',
  'ngMaterial',
  'ngMessages',
  'ngMdIcons',
  'material.svgAssetsCache'
])
  .constant('apiEndpoints', {
    base: 'https://api.sandbox.autoenrolment.co.uk',
    postCompany: '/companies',
    companyByName: '/companies/by_name?name='
  });
