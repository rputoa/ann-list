'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	// First way to create a service
	//.value('FIREBASE_URL', 'https://waitandeat--atlhnet.firebaseio.com/')
	// Using factory
	.factory('ANN_URL_LIST_ALL', function() {
		return 'http://www.animenewsnetwork.com/encyclopedia/reports.xml?id=155&type=anime&nlist=all';
	})
	.factory('FIREBASE_URL', function() {
		return 'https://ann-list.firebaseio.com/';
	})
	.factory('FIREBASE_ANIME_URL', function() {
		return 'https://ann-list.firebaseio.com/items/';
	})
	.factory('ANN_DETAIL_URL', function() {
		return 'https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=';
	})
	
	// Data service : 
	.factory('dataService', function($firebase, FIREBASE_URL) {
		var dataRef = new Firebase(FIREBASE_URL);	
		var firebaseData = $firebase(dataRef);
		return firebaseData;
	})

	// Data service : 
	.factory('dataAnimeService',['$firebase', 'FIREBASE_ANIME_URL', 'ANN_DETAIL_URL', '$http', function($firebase, FIREBASE_ANIME_URL, ANN_DETAIL_URL, $http) {
		var dataRef = new Firebase(FIREBASE_ANIME_URL);	

		var firebaseDataObject = {
	
			getData : function(start, limit) {
				var dataRefPrep = dataRef.startAt(null,String(start)).limit(limit);
				var firebaseData = $firebase(dataRefPrep);
				return firebaseData;
			},

			getAnimes : function(start, limit){			
				return this.getData(start, limit).$asArray();
			},

			getDetailAnime : function(id){
				var url = ANN_DETAIL_URL + id;
				// Call ANN Api with id
				$http.get(url).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					var x2js = new X2JS();
					var json = x2js.xml_str2json(data);
					return json;
				}).
				error(function(error){
					return error;
				});
			}

		};
		
		return firebaseDataObject;
	}])

	

