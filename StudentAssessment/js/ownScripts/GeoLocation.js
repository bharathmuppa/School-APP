$(document).ready(function() {

    var startingLocation;
    var destination = "Tcs hyderabad kohinoor park"; // replace this with any destination
 
 if (navigator.geolocation) { 
 
    // get user's current position
    navigator.geolocation.getCurrentPosition(function (position) {   
         // get latitude and longitude
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        startingLocation = latitude + "," + longitude;
        // send starting location and destination to goToGoogleMaps function
        goToGoogleMaps(latitude,longitude,destination);
 
    });
 
}
else{
	alert("geo location not supported");
}

function goToGoogleMaps(latitude,longitude,destination) {


	  latlon=new google.maps.LatLng(latitude,longitude);
	    
  mapholder=document.getElementById('map1');
  mapholder.style.height='350px';
  mapholder.style.width='850px';
  mapholder.style.leftmargin='5px';

  var myOptions={
  center:latlon,zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };

  var map=new google.maps.Map(document.getElementById("map1"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	
}
});
