app.controller("MainController", ['$scope', '$location', function($scope, $location){

//constructing a basic filter thaht will evevntaully be attached
//to the dataTable below
$scope.isActive = function (viewLocation) {

     var active = (viewLocation === $location.path());
     return active;
    };
}]);//end app.controller()

