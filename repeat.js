/*var app = angular.module('app',[]);


        app.controller('appController',function($scope){
            $scope.list1 = ["0","1"];
            $scope.list2 = ["0","1"];
        });
*/

(function(){
    'use strict';

    angular
        .module('app',[])
            .controller('appController',appController);

    function appController(){
        var vm = this;

        vm.list1 = ["0","1"];
        vm.list2 = ["0","1"];
    }

})();