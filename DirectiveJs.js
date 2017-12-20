(function () {
    'use strict';

    angular
        .module('customDirective', [])
        .controller('directiveController', directiveController);

    function directiveController() {
        var vm = this;
        vm.Name = "Rahul";
        vm.emp = {
                            name : "RJ",
                            position : "HR"
                      };
        
        debugger;
        vm.reverseName = function () {
            vm.Name = vm.Name.split('').reverse().join('');
        };
        vm.click = function () {
            debugger;
            alert('function called');
        };
    }

    angular
        .module('customDirective')
           .directive('firstDirective', firstDirective);


    function firstDirective() {
        debugger;
        var directive = {
            restrict : 'E',
            scope: {
                    action : '&',
                    dname : '@',
                    emp : '=',
                    testname : '='
                },
            template:   "<h3>Directive Scope</h3>" 
                        +"<a href='#' ng-click='action()'>Home</a><span class='style'></span><a href='#' ng-click='action()'>Menu</a><span class='style'></span>"
                        +"Name :{{dname}}"
                        +"<ul><li ng-repeat = 'prop in emp'>{{prop}}</li></ul>"
                        +"<input type='text' ng-model='testname'>"
        };
        return directive;

    }

})();

