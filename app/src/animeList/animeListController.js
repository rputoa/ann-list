/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    // Register animeListController to animeListModule
    angular
        .module('animeList')
        .controller('animeListController', animeListController);

    // Injection
    animeListController.$inject=['animeListService', 'animeListInit'];

    // Controller
    function animeListController(animeListService, animeListInit) {
        var self = this;
        // Search parameter 
        self.searchParameter = {
            start : 0,
            limit : 20,
            name : ""
        };
        self.animes = animeListInit.animes;             
        self.getAnimeList = getAnimeList;
        self.nextPage = nextPage;
        self.previousPage = previousPage;
        self.isStart = isStart;
        self.searchParameterNameChange = searchParameterNameChange;

        // Functions
        function getAnimeList() {
            var data = animeListService.getAnimeList(self.searchParameter.start, self.searchParameter.limit, self.searchParameter.name).then(function(response){  
                console.log("Logging in data :", response);      
                self.animes = response.animes;           
            });            
        }

        function nextPage() {
            self.searchParameter.start += self.searchParameter.limit;
            getAnimeList();
        }

        function previousPage() {
            if(self.searchParameter.start - self.searchParameter.limit < 0){
                self.searchParameter.start = 0;
            }else {
                self.searchParameter.start -=  self.searchParameter.limit;
            }
            
            getAnimeList();
        }

        function isStart() {
            return self.searchParameter.start === 0;
        }

        function searchParameterNameChange() {
            self.searchParameter.start = 0;
            getAnimeList();
        }
        
    }
})();

