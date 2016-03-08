$(document).ready(function() {
	$( "#cityfield" ).keyup(function() {
	  var url = "../getcity?q="+$("#cityfield").val();
	  $.getJSON(url,function(data) {
	  var everything;
	  everything = "<ul>";
	  $.each(data, function(i,item) {
		everything += "<li> "+data[i].city;
	  });
		
	  everything += "</ul>";
	  $("#txtHint").html(everything);
	  });
	});

	$("#button").click(function(e){
	  var value = $("#cityfield").val();
	  console.log(value);
	  e.preventDefault();
	  $("#dispcity").text(value);
	  
	  var myurl= "https://api.wunderground.com/api/15f0e0e563b075e3/geolookup/conditions/q/UT/";
	  myurl += value;
	  myurl += ".json";
	  console.log(myurl);
	  $.ajax({
		url : myurl,
		dataType : "jsonp",
		success : function(parsedJSON) {
			//console.log(data);
			var location = parsedJSON['location']['city'];
			var temperature = parsedJSON['current_observation']['temperature_string'];
			var currentWeather = parsedJSON['current_observation']['weather'];
			var weatherListing = "<ul>";
			weatherListing += "<li>Location: " + location;
			weatherListing += "<li>Temperature: " + temperature;
			weatherListing += "<li>Current Weather: " + currentWeather;
			weatherListing += "</ul>";
			console.log(weatherListing);
			$("#weather").html(weatherListing);
		}
	  });
	});

});