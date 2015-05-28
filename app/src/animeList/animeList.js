/**
 * Created by KuroVM on 28/05/2015.
 */
(function () {
    'use strict';

    // Prepare the 'animeList' module for subsequent registration of controllers and delegates
    angular
        .module('animeList', ['ui.router'])
        .config(animeListRoute)

    // Injection
    animeListRoute.$inject = ["$stateProvider"];

    // Route function
    function animeListRoute($stateProvider) {

        // Setting up states
        $stateProvider
            // State register
            .state('list', {
                url: "/list",
                templateUrl: "src/animeList/animeList.html",
                controller : "animeListController",
                controllerAs : "animeListController",
                resolve: {
                    'animeListInit' : ['animeListService', resolverAnimeListInit]
                }
            })
    };

    /**
    * This method return an list of anime 
    * @param {type} animeListService
    * @returns {unresolved}
    */
    function resolverAnimeListInit(animeListService) {
        return animeListService.getAnimeList(0, 20, null);
    }

})();
