/**
 * Created by KuroVM on 17/03/2015.
 */
(function(){
    'use strict';
    angular
        /*
        Define module use by app
        - ngMaterial : Angular Design Material
        - menu : Module used for sideBar Menu
         */
        .module('app')        
        /*
         Configuration for routage service.         
         */
        .config(appRoute);
       
        function appRoute($stateProvider, $urlRouterProvider){

            // For any unmatched url, redirect do /data
            $urlRouterProvider.otherwise("/"); 

            $stateProvider
              .state('home', {
                url : "/",
                templateUrl : "src/home.html",
              });         
        }
})();
    	

   