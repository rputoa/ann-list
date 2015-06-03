/**
 * Created by KuroVM on 04/04/2015.
 */
(function () {
    'use strict';

    // Register animeListController to animeListModule
    angular
        .module('app')
        .directive('includeReplace', includeReplace)
        .directive('foundationNavBar', foundationNavBar)
        .directive('foundationFooter', foundationFooter);

    // Directive
    function includeReplace() {
        return {
            require : 'ngInclude',
            restrict : 'A',
            link : function(scope,el,attrs) {
                el.replaceWith(el.children());
            }
        };        
    };

    /** Directive for nav bar */
    function foundationNavBar() {
        return {
            restric : 'A',
            templateUrl : 'src/template/navigation.html',
            compile : function() {
                $(document).foundation();
            }
        };
    };

    /** Direcive for footer area */
    function foundationFooter() {
        return {
            restrict : 'A',
            templateUrl : 'src/template/footer.html',
             compile : function() {
                $(document).foundation();
            }
        };
    };

})();

