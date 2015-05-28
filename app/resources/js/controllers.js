'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function(){

  }])	
	.controller('annListController', ['$scope', 'dataAnimeService', function($scope, dataAnimeService) {

		$scope.searchParameter = {
			start : 0,
			limit : 10,
		};

		// List of all anime
		$scope.animes = dataAnimeService.getAnimes($scope.searchParameter.start, $scope.searchParameter.limit);

		// return if we are a the start of the list
		$scope.isStart = function() {
			return $scope.searchParameter.start <= 0;
		}

		$scope.getAnimes = function() {
			if($scope.searchParameter.limit >0 ){
				$scope.animes = dataAnimeService.getAnimes($scope.searchParameter.start, $scope.searchParameter.limit);
			}
			
		};

		$scope.nextPage = function(){			
			$scope.searchParameter.start = $scope.searchParameter.start + 50;
			$scope.getAnimes();
		};

		$scope.previousPage = function(){	
			$scope.searchParameter.start = $scope.searchParameter.start -50;
			if($scope.searchParameter.start < 0){
				$scope.searchParameter.start = 0;
			}
			$scope.getAnimes();
		};	
	
	}])
	.controller('detailAnimeController', ['$scope', '$routeParams', 'dataAnimeService', function($scope, $routeParams, dataAnimeService) {
		$scope.animeId = $routeParams.animeId;

	}])
;