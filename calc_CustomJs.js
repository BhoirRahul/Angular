(function(){
    'use strict';

    angular
        .module('calculator',[])
            .controller('calculatorController',calculatorController);

    function calculatorController (){
        var vm = this;
        
        vm.operatorClick = function(button){
            vm.selectOperator = button;
        }

        vm.resultOutput = function(){
            var num1 = parseFloat(vm.input1);
            var num2 = parseFloat(vm.input2);

            if(vm.selectOperator == '+'){
                vm.result = num1 + num2 ;
            }
            else if(vm.selectOperator == '-'){
                vm.result = num1 - num2 ;
            }else if(vm.selectOperator == '/'){
                vm.result = num1 / num2 ;
            }else if(vm.selectOperator == '*'){
                vm.result = num1 * num2 ;
            }
        }
    }
})();
