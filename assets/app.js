$(document).ready(function() {

	$("button").on("click", function(){

		
		var API = "e3c7a67e55d75859a8b161362f1a2689";
		var location = $("#search-input").val();
		var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial" + "&appid=" + API;

		    $.ajax({
		      url: queryURL,
		      method: "GET"
		    }).done(function(response) {
		    	$("#weather").html("<h1>Current Weather</h1>");
		        $("#weather").append("<h2>" + response.name + "</h1>");
		        $("#weather").append("<h3>" + response.weather[0].main + "</h3>");
		        $("#weather").append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'/>");
		        $("#weather").append("<h3>Humidity: " + response.main.humidity + "%</h3>");
		        $("#weather").append("<h3>Temperature: " + response.main.temp + "</h3>");
		        $("#weather").append("<h3>Wind Speed: " + response.wind.speed + " MPH</h3>");
		    });

		    var googleURL = "https://www.googleapis.com/travelpartner/v2.0/068f3741bedde8b1fdf05dc0011708257e539c84/reports";

		    $.ajax({
		    	url: googleURL,
		    	method: "GET"
		    }).done(function(response){
		    	console.log(response)
		    });
	});

})