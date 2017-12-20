(function(){
    'use strict';

    angular
        .module('serviceModule',[])
            .controller('serviceController',serviceController);

    function serviceController( $location , $timeout , $interval ){
        debugger;
        var vm = this;
        
        vm.page_Url = $location.absUrl();

        vm.msg  = "Service test....";
        $timeout(function(){
            vm.msg = "TEST FINISHED ..."
        },4000);

        vm.time = new Date().toLocaleTimeString();
        $interval (function(){
            vm.time = new Date().toLocaleTimeString();
        },1000);

        

    }
})();