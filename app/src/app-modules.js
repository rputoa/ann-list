/**
 * Created by KuroVM on 28/05/2015.
 */
(function(){
    'use strict';

    angular
        /*
        Define module use by app
        - ngMaterial : Angular Design Material
        - menu : Module used for sideBar Menu
         */
        .module('app',['ngMaterial','ui.router','animeList','animeDetail']);       
})();