app.controller("HomeController",  function($scope){

    $scope.person = {
        firstName: "home",
        lastName: "page"
    };

    $scope.BackgroundImage = {
    	background: 'url(pimpphoto.png)',
    	'background-size': 'cover',
    	'background-repeat': 'no-repeat',
    	'background-position': 'center center',
        'padding-top': '1px',
        'padding-bottom': '2%'
    };

    $scope.InstagramBgImg = {
    	background: 'url(inst_gallery_bg.png)',
    	'background-size': '700px',
        'background-position': '12% 60%',
        'background-repeat': 'repeat-x'
	};
});
 