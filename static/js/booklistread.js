$.getJSON('/bookdb/db.json', function(data) {
	var oldread = "";
	for (var i in data.books.reverse() ) {
		if (data.books[i].amReading == "false" || data.books[i].amReading == false) {
			if (data.books[i].myDate != "false" && data.books[i].myDate != false) {
				oldread += "<div class=\"tbr-entry h-entry\">";
				oldread += "<div class=\"tbr-img h-entry\"><img width=\"80\" height=\"120\" src=\"https://books.google.com/books/content?id=" + data.books[i].id + "&printsec=frontcover&img=1&zoom=5&source=gbs_api\"></div>"
				oldread += "<div class=\"centre e-content\"><strong><em>" + data.books[i].title + "</em> by "  + data.books[i].author + "</strong><div class=\"star-ratings-css\"><div class=\"star-ratings-css-top\" style=\"width: " + data.books[i].myRating +"%\"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class=\"star-ratings-css-bottom\"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div></div><div class=\"centre\"><em>\"" + data.books[i].abstract + "\"</em></div>"
				oldread += "</div></div><hr />";
			}
		}
	document.getElementById("booklist").innerHTML=oldread;
	}
});

