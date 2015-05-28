'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.select',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
])
// Route provider
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing_page.html', controller: 'LandingPageController'});
  $routeProvider.when('/list', {templateUrl : "partials/list.html", controller: 'annListController'});
  $routeProvider.when('/detail/:animeId', {templateUrl : "partials/detail.html", controller: 'detailAnimeController'});
  $routeProvider.otherwise({redirectTo: '/'});
}])
.config(['uiSelectConfig', function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
}])
;
