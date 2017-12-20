(function(){
    'use strict';

    angular
        .module('demo',[])
            .controller('demoController',demoController);


    function demoController($scope){
        //var vm = this;
        $scope.demo = "DemoTest";
           }
})();