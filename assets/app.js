

function ajaxCall() {
//Place Search AJAX
var AuthKey = "key=AIzaSyBdQJlj34lrWZa5HxtRnRc0qMoE6VVXRUo";
var placeSearchTerm = "jamaica"; //searchTerm;
var placeQueryURLBase =  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

//Photo Search Ajax 
var photoQueryUrlBase = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";

$.ajax({
      url: placeQueryURLBase + placeSearchTerm + "&" + AuthKey,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      var photoReference = response['results'][0]['photos'][0]['photo_reference']
      console.log(photoReference);
      var photoResponse = (photoQueryUrlBase + photoReference + '&' + AuthKey);
      console.log(photoResponse);
      // $.ajax({
      // 	url: photoQueryUrlBase + photoReference + '&' + AuthKey,
      // 	method: "GET"
      // }).done(function(photoResponse){
      // 	console.log(photoResponse);
      // 	return photoResponse;
      // })
    });
}  

console.log(ajaxCall());  


// $("#search").on("click", function(event) {
// 	event.preventDefault();

// 	$("#images").empty();

	// var newImage = $("<img>")

	//newImage.attr('src', 'photoResponse')

	//$("#images").append(newImage);

// 	var searchTerm = $("#searchTerm").val().trim();
//pass this into function for the placeSearchTerm

//append several images into the "images" div 

// 	var searchURL = queryURLBase + searchTerm;
// })

