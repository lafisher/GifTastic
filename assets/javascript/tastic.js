$(document).ready(function() {
/* try as i might i can't get my app to function properly this way 
i left this in for you to see my attempt at generating the buttons dynamically
instead of writing it out in the HTML the way i did.
    
    var topics = ["Wonder Woman Justice League","Flash Barry Allen","Superman","Batman","Iron Man Avengers","Captain America Avengers","The Black Widow Avengers","Thor Avengers","Loki Tom Hiddleson"];
    var battle;        
        
    function assemble() {
        $("#battle-ground").empty();
        // for loop to generate buttons. 
        for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
          a.addClass("superHero");
          a.attr("data-character", topics[i]);
          a.text(topics[i]);
          $("#battle-ground").append(a);
        }
      }
assemble();*/ 
var topics = []; 
var giphyInfo = [];    

 function gifMagic() {
      var character = $(this).attr("data-character");
      var state = $(this).attr("data-state");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='superGif'>");

            var rating = results[i].rating;

            var rateDiv = $("<p class= 'divRates'>").text("Rating: " + rating);

            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(characterImage);
            gifDiv.prepend(rateDiv);
            

            $("#dc-marvel").prepend(gifDiv);
          }
        });
        };

$("button").on("click", gifMagic); 
$(document).on("click", ".character", gifMagic); 
          
        function renderButtons() { 
        $("#new-buttons").empty(); 

        // Looping through the array of added topics 
        for (var i = 0; i < topics.length; i++) {
         
          var buttonMaker = $("<button>");
          
          buttonMaker.addClass("character");
          buttonMaker.addClass("btn-danger");
          // Add data-attribute
          buttonMaker.attr("data-name", topics[i]);
          buttonMaker.attr("data-character", topics[i]);
          // button text
          buttonMaker.text(topics[i]);
          // Add button to the new-buttons div
          $("#new-buttons").prepend(buttonMaker);
        }
      }
        

        $(document).on("click", "#add-superHero", function(){
        event.preventDefault();
        // grab the input from textbox
        var character = $("#superHero-input").val().trim();

        // Add info from the textbox to empty array
        topics.push(character); 
         renderButtons();     
        }); 
                
      
//wouldnt it be nice if my whole app worked? 
      /*  $('.superGif').on("click", function() { 
          console.log("pickles");
          characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);
         
*/
            /*var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }*/
   
    });
