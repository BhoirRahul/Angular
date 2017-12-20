(function(){
    'use strict';    

    angular
        .module('student',[])
            .controller('studentController' , studentController);

    function studentController(){
            var vm = this;

            //Referance student data
            vm.stuInfo = [ 
                            {id:'03',name:'sunil ',email:'abc@gmail.com',contact:'1234567890'},  
                            {id:'01',name:'Rahul',email:'abc@gmail.com',contact:'1234567890 '},
                            {id:'02',name:'RJ',email:'abc@gmail.com',contact:'0987654321 '}
                         ];

                         //Function to fetch index
                         function getIndex(id){ 
                            debugger;
                            var i;
                            vm.stuInfo.forEach(function(currentItem,index,array){
                                if(currentItem.id == id){
                                    debugger;
                                     i = index;
                                }
                            });
                            return i;
                        }

                        //Function for removing entry from table
                        vm.delEntry = function(id){
                            debugger;
                            var op = confirm("Are you sure ?");
                            if(op){
                                var index = getIndex(id);
                                vm.stuInfo.splice(index,1);
                            }
                        }
                        
                        //Function for add data into table
                        vm.add = function(){
                            debugger;
                            vm.stuInfo.push({
                                id :vm.id,
                                name : vm.name,
                                email : vm.email,
                                contact : vm.contact
                            });
                            vm.id = ' ';
                            vm.name = ' ';
                            vm.email = ' ';
                            vm.contact = ' ';
                        }
                        
                        // Function for selecting data for editing
                        vm.editInput = function(id){
                            debugger;
                            var index = getIndex(id);
                            var temp = vm.stuInfo[index];
                            vm.id = temp.id;
                            vm.name = temp.name;
                            vm.email = temp.email;
                            vm.contact = temp.contact;
                        }
                        
                        //Function to save the edited data into table
                        vm.save = function(){
                            var index = getIndex(vm.id);
                            vm.stuInfo[index].id = vm.id;
                            vm.stuInfo[index].name = vm.name;
                            vm.stuInfo[index].email = vm.email;
                            vm.stuInfo[index].contact = vm.contact;
                        }
    } 
})();
