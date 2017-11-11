$(document).ready(function() {

	var yourCity = [];
	//on sumbit run function searchLocation
	$("#search-form").on("submit", searchLocation);
	//on click run function searchLocation
	$("#search-button").on("click", searchLocation);
	//create a function for our event
	function searchLocation(event){
		//prevent form from submitting
		event.preventDefault();

		var API = "e3c7a67e55d75859a8b161362f1a2689";
		var newCity = $("#search-input").val();
		var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=imperial" + "&appid=" + API;

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

		yourCity.push(newCity);

		locationButtons();
	}

	$(document).on("click", ".newCity", function(){

		$("#weather").empty();

		var theCity = $(this).attr("data-name");

		var API = "e3c7a67e55d75859a8b161362f1a2689";

		var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&units=imperial" + "&appid=" + API;

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
	});

	function locationButtons(){

		$("#recentLocations").empty();

		for (var i = 0; i < yourCity.length; i++) {
			
			var city = $("<button>");

			city.addClass("newCity");

			city.attr("data-name", yourCity[i]);

			city.text(yourCity[i]);

			$("#recentLocations").append(city);
		}
	}

})