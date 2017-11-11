$(document).ready(function() {
  function getLocation() {
    var AuthKey = "key=AIzaSyBdQJlj34lrWZa5HxtRnRc0qMoE6VVXRUo";
    var searchTerm = $("#search-input").val();
    var placeQueryURLBase =  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
    var photoQueryUrlBase = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
    console.log(searchTerm);
    $.ajax({
          url: placeQueryURLBase + searchTerm + "&" + AuthKey,
          method: "GET"
          }).done(function(response) {
          console.log(response)
          var locationReference = response['results'][0]['photos'][0]['photo_reference'];
          //var locationReference = response['results'][0]['photos'][0]['reference'];
          var imageSrc = photoQueryUrlBase + locationReference + '&' + AuthKey;
          addImage(imageSrc);
          console.log("hi");
        });
  }
  function addImage(imageSrc) {
    $("#images").empty();
      var newImage = $("<img>");
      newImage.attr('src', imageSrc);
      newImage.attr('id', 'newImage');
      $("#images").append(newImage);
      console.log(newImage);
  };
  $("#search-button").on("click", function() {
    event.preventDefault();
    getLocation();
  })
  $("#search-form").on("submit", getLocation);
  event.preventDefault();
  getLocation();
})



// 	var searchURL = queryURLBase + searchTerm;

