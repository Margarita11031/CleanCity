

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(50.4388394,30.5147999),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
//google.maps.event.addDomListener(window, 'load', initialize);

function LoadPoints_void(strPointType){
	
	GetPoints_tbl();
}

function GetPoints_tbl(){
	var data = getJSON('http://clean.intent.im:80/api/point',
	function(data){console.log("Your query count: " + data.query.count)});
}

function getJSON(url, success) {



}