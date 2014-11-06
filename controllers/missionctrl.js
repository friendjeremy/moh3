app.controller("MissionController", function($scope){   

    $scope.person = {
        firstName: "Our",
        lastName: "Mission"
    };
   
	$scope.BackgroundImage = {
    	background: 'url(Mission.jpg)',
    	'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center center'
	};

});

