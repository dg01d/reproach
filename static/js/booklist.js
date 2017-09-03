$.getJSON('/bookdb/db.json', function(data) {
	var output = "";
	for (var i in data.books) {
		if (data.books[i].amReading == "false" || data.books[i].amReading == false) {
			if (data.books[i].myDate == "false" || data.books[i].myDate == false) {
				output += "<div class=\"tbr-entry h-entry\">";
				output += "<div class=\"tbr-img\"><img width=\"80\" height=\"120\" src=\"https://books.google.com/books/content?id=" + data.books[i].id + "&printsec=frontcover&img=1&zoom=5&source=gbs_api\"></div>";
				output += "<div class=\"tbr-item e-content\"><div class=\"centre\"><strong><em>" + data.books[i].title + "</em> by "  + data.books[i].author + "</strong><br /><em>\"" + data.books[i].abstract + "\"</em></div></div>";
				output += "</div><hr />";
			}
		}
	document.getElementById("booklist").innerHTML=output;
	}
});

