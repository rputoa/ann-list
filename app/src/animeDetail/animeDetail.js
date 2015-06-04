/**
 * Created by KuroVM on 28/05/2015.
 */
(function () {
    'use strict';

    // Prepare the 'animeList' module for subsequent registration of controllers and delegates
    angular
        .module('animeDetail', ['ui.router'])
        .config(animeDetailRoute);

    // Injection
   animeDetailRoute.$inject = ["$stateProvider"];

    // Route function
    function animeDetailRoute($stateProvider) {

        // Setting up states
        $stateProvider
            // State register
            .state('detail', {
                url: "/detail",
                templateUrl: "src/animeDetail/animeDetail.html",
                controller : "animeDetailController",
                controllerAs : "animeDetailController"               
            });
    }
})();
