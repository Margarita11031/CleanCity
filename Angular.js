

var app= angular.module("angCleanCity",['uiGmapgoogle-maps']);

app.controller('myCtrl', function($scope, $http){
		$http.get('http://clean.intent.im:80/api/point').
        success(function(data) {
            $scope.points = data;
        });	


		$scope.map = { 
			center: { latitude: 50.4388394, longitude: 30.5147999 },
			zoom: 13 };
	});
	
	 