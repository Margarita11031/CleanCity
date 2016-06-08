

var app= angular.module("angCleanCity",['uiGmapgoogle-maps']);

app.controller('myCtrl', function($scope, $http){
	$scope.map = {
		center: { latitude: 50.4388394, longitude: 30.5147999 },
		zoom: 13,
		markers: [],
		fit: true
	};
    //$scope.map.markers.push({"latitude":33.22,"longitude":35.33});
    //$scope.map.markers.push({"latitude":50.4388394,"longitude":30.5147999});
    $scope.map.markers.push({"id":1000,"coords":{"latitude":33.22,"longitude":35.33}});
    $scope.map.markers.push({"id":1001,"coords":{"latitude":50.4388394,"longitude":30.5147999}});
	$http.get('http://clean.intent.im:80/api/point').
		success(function(data) {
			$scope.points = data;
			//for(var i=0; i<$scope.points.length; i++){
			for(var i=0; i<50; i++){
				var tblXYZCoords = $scope.points[i].location.split(",");
				$scope.map.markers.push({"id":$scope.points[i].id,"coords":{"latitude":tblXYZCoords[1],"longitude":tblXYZCoords[0]}});
			}
		});

	});
	
	 