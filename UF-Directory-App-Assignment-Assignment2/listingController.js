
var target;

angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 

  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
     
    $scope.addListing = function() {
        
         //Listings.push({code:'code',name:'name'});
      
        Listings.push({code:$scope.code1,
                      name:$scope.name1,
                      coordinates:$scope.coordinates1,
                      address:$scope.address1
                      });

        // Listings.push({
        //     'code':"aa", 
        //     'name':"ol" , 
        //     'coordinates': "",
        //     'address':""
        // })
    };

    $scope.deleteListing = function(index) {
       //$scope.Listings.splice(index,1); //figure out how to select from html
      console.log('the index passed is:' +  index.code);
      // target = Listings.indexOf(index);
      // console.log('target is:' + target);
      Listings.splice(index,1);

    //    $scope.removeContact = function(contactToRemove) {
    // var index = $scope.contacts.indexOf(contactToRemove);
    // $scope.contacts.splice(index, 1);
  //};

    };
    $scope.showDetails = function(index) {
        // console.log(index);
        // console.log("the object code is" + index.code);
        $scope.code=index.code;
        $scope.name=index.name;
        $scope.address=index.address;
        $scope.coordinates=index.coordinates;


        //use {{code}} in index
        //use this function to get each field using index

    };
  }
]); 

//controller function takes two arguments.First is the name
//of Controller: 'ListingsController' and second argument is 
//controller definition function whihc contains the actual logic
//of controller

//Take special note at how we have defined our controller definition
//function inside an array. The array holds all the dependencies
//for the controller as string variables($scope,Listings) and the last 
//argument in the array is the actual controller function.

