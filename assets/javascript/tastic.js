$(document).ready(function() {

//var topics = ["Wonder Woman Justice League","Flash Barry Allen","Superman","Batman","Iron Man Avengers","Captain America Avengers","The Black Widow","Thor Avengers","Loki Tom Hiddleson"];
//var battle;
//function assemble(){
  //for (var i = 0; i < topics.length; i++) {
    //topic[i]}

$("button").on("click", function() {
      var character = $(this).attr("data-character");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(characterImage);

            $("#dc-marvel").prepend(gifDiv);
          }
        });
    });

});