(function(){
'use strict';

    angular
        .module('CentralFun',[])
            .controller('CentralFunController',CentralFunController);

    function CentralFunController($scope){
        //var vm = this;
        $scope.name = "Rahul";
        $scope.test = "Testing...";
        $scope.count = 0;

        $scope.$watch("name",function(oldValue , newValue){
            if(oldValue != newValue){
                $scope.count = $scope.count+1;
            }
        });

        $scope.changeName = function(){
            $scope.test = "Changed by angular function";
        }

        document.getElementById("btn").addEventListener("click",function(){
            $scope.test = "Changed by javascript function";
            //$scope.$digest();
            $scope.$apply(function(){
                $scope.name = "Name is changed due to $APPLY"
            })
        });
    }


})();