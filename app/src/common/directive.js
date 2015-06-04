/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    // Register animeListController to animeListModule
    angular
        .module('app')
        .directive('includeReplace', includeReplace)
        .directive('headerBar', headerBar)
        .directive('footerBar', footerBar);

    // Directive
    function includeReplace() {
        return {
            require : 'ngInclude',
            restrict : 'A',
            link : function(scope,el,attrs) {
                el.replaceWith(el.children());
            }
        };        
    }

    /** Directive for nav bar */
    function headerBar() {
        return {
            restric : 'A',
            templateUrl : 'src/template/navigation.html'
        };
    }

    /** Direcive for footer area */
    function footerBar() {
        return {
            restrict : 'A',
            templateUrl : 'src/template/footer.html'             
        };
    }

})();

