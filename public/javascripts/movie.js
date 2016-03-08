$(document).ready(function() {
	$("#submit").click(function(e){
		var movie = $("#movieQuery").val();
		e.preventDefault();
		$("#movieName").text(movie);
		var baseUrl = "http://api.themoviedb.org/3/";
		var query = "search/movie?query=";
		var img_base_url = "http://image.tmdb.org/t/p/";
		var apikey = "&api_key=cb4d4153fb52c2f0cbd9d71443e49e1c";

		var ajaxRequest = baseUrl + query+ movie + apikey;
		$.ajax({
			url: ajaxRequest,
			dataType : "jsonp",
			success : function(parsedJSON) {
				var results = parsedJSON['results'];
				var printedResults = "<ul>";
				for (var i = 0; i < results.length; i++)
				{
					printedResults += "<li>" + results[i]["title"];
				}
				printedResults += "</ul>";
				$("#result").html(printedResults);
				console.log(printedResults);
			}
		})
	});
});