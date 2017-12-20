/*(function(){
'use strict';
    angular
        .module('CustomFilter',[ ])
            .controller('CustomController',CustomController);


    function CustomController(){
        var vm = this;

        /*vm.user = [   
                        {name : "A", sal : "10000"},
                        {name : "B", sal : "20000"},
                        {name : "C", sal : "30000"},
                        {name : "D", sal : "40000"}
                  ];
        vm.user = [ "10000","20000","30000","40000" ];

    }

    angular
        .module('CustomFilter')
            .filter('converter',converter);
        
    function converter(input){
        debugger;
         function(input){
            debugger;
            switch(input){
                case 10000 :
                    return "10,000.00";
                case 20000 :
                    return "20,000.00";
                case 30000 :
                    return "30,000.00";
                case 40000 :
                    return "40,000.00";
            }
        }
    }
})();*/

var custFilter = angular.module('custom',[]);
custFilter.controller("CustomController",function($scope){
    $scope.user = [
        "10000","20000","30000","40000"
    ];
});
custFilter.filter('converter',function(){
    debugger;
    return function(input){
        debugger;
        /*if(input == 10000)
        {
            return "10,000.00";
        }else if(input == 20000)
        {
            return "20,000.00";
        }else if(input == 30000)
        {
            return "30,000.00";
        }else if(input == 40000)
        {
            return "40,000.00";
        }*/
        var string = input.toString();
        var result,txt1,txt2;
        txt1 = string.substr(0,2);
        txt2 = string.substr(2,3);
        result = txt1.concat(",",txt2,".00");
        return result;

    }
})




