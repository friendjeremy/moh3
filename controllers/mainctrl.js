app.controller("MainController", ['$scope', '$location', function($scope, $location){


$scope.isCollapsed = true;
$scope.isActive = function (viewLocation) {

     var active = (viewLocation === $location.path());
     return active;
    };
}]);//end app.controller()

