var movies = ["The Matrix", "The Lion King", "Iron man", "Gladiator", "Forrest Gump", "Scary Movie", "Home Alone", "The Shinning", "The Dark Knight", "Pulp Fiction", "Inception", "Back to the Future", "Toy Story", "Mrs Doubtfire", "Ace Ventura", "Tropic Thunder", "Star Wars", "Rocky", "Godzilla", "Spiderman"]

function displayMovieGif(){

	$("#gifs-appear-here").empty()

	var movie = $(this).attr("data-username");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6yVRfjLPM7rFGhOVsJD0CngXrM9l9I4m&q=" + movie + "&limit=10&offset=0&rating=G&lang=en";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		var results = response.data;

		for (var i = 0; i < results.length; i++){
			var gifDiv = $("<div class='movie'>");

			var rating = results[i].rating;

			var p = $("<p>").text("Rating: " + rating);

			var movieImage = $("<img>");
			movieImage.attr("src", results[i].images.fixed_height.url);

			gifDiv.prepend(p);
			gifDiv.append(movieImage);

			$("#gifs-appear-here").prepend(gifDiv);
		}
	})
};

	function renderButtons() {
		$("#buttons-view").empty();

		for (var i = 0; i < movies.length; i++) {

			var a = $("<button>");

			a.addClass("movie");
			a.attr("data-username", movies[i]);
			a.text(movies[i]);

			$("#buttons-view").append(a);
		}
	}

	$("#add-movie").on("click", function(event) {
		event.preventDefault();

		var movie = $("#movie-input").val().trim();

		movies.push(movie);

		renderButtons();
		
	});

	$(document).on("click", ".movie", displayMovieGif);

	 renderButtons() ;


