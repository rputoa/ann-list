(function () {
    'use strict';

    angular.module('animeList')
        // Define Constant for Anime News Network API 
        .factory('ANN_URL_LIST_ALL', function() {
            return 'http://localhost:8080/list?';
        })
        .factory('animeListService', animeListService);

        // Injection
        animeListService.$inject=['ANN_URL_LIST_ALL', '$http'];

        // Factory
        function animeListService(ANN_URL_LIST_ALL, $http) {

            // Instanciante a xml to json converter
            var x2js = new X2JS();

            var service = {
                getAnimeList : getAnimeList
            };

            return service;

            /////////// Functions

            /* Return animeList from Anime News Network */
            function getAnimeList(start, limit, name) {                
                var urlAdress = getUrlAdressWithParam(start, limit, name);
                // Call ANN API
                var promise = $http.get(urlAdress).then(function(response) {                    
                    return response.data;
                });

                console.log(promise);
                return promise;
            }; 

            function getUrlAdressWithParam(start, limit, name) {
                var startParam = "&start=";
                var limitParam = "&limit=";
                var nameParam = "&name=";
                var fullAdress = ANN_URL_LIST_ALL;
                // Prepare pagination
                if(start){
                    startParam = startParam + start;
                    fullAdress = fullAdress + startParam;                    
                }
                if(limit){
                    limitParam = limitParam + limit;
                    fullAdress = fullAdress + limitParam;
                }
                if(name && !!name.trim()) {
                    nameParam = nameParam + name;
                    fullAdress = fullAdress + nameParam;
                }
                return fullAdress;
            }


            function convertResponseToJson(response){
                console.log(response);
                // Convert to Json
                var jsonResponse = x2js.xml_str2json(response);
                return jsonResponse;
            }
        }


})();