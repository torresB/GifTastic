var gifDiv = $('.gifDiv');
var gifsGoHere = $('#gifsAppearHere');
var cartoons= ["Aaahh!!! Real Monsters", "Adventure Time", "Angry Beavers", "Arthur", "CatDog", "Daria","Dexter's Laboratory", "Doug", "Hey Arnold!", "Invader Zim","Johnny Bravo", "Pinky and the Brain","Pokemon", "The Powerpuff girls", "The Regular Show", "The Ren & Stimpy Show","Rocko's Modern Life", "Rugrats", "SpongeBob SquarePants" ];
for (var i = 0; i < cartoons.length; i++){
  var buttons= $('<button data-cartoon="' + cartoons[i] + '">'+cartoons[i]+ '</button>')
  gifDiv.append(buttons);

}

$(document).on("click","button" ,function() {
  console.log(this);
  
    var cartoon= $(this).attr("data-cartoon");
     var queryURL= 'https://api.giphy.com/v1/gifs/search?q="' + cartoon + '"&api_key=aunUeTLptVcpXeldU1EgMaU8VibAiTT1&limit=10';
        console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
      var results= response.data;
      console.log(response.data);

      for (var i= 0; i < results.length; i++) {
        
          var rating= results[i].rating;
          var c= $("<p>").text("Rating:" + rating);
          var cartoonImage = $("<img>");

          cartoonImage.attr("src", results[i].images.fixed_height.url);

          gifsGoHere.prepend(c);
          gifsGoHere.prepend(cartoonImage);
        
      }
      
     });
});

// $('#submit').on('click', function(e) {
//   e.preventDefault();

//   // Add your new button using the text from input to html here
// });
