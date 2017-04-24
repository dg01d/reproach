$.getJSON('/bookdb/db.json', function(data) {
	var reading = "<div class=\"curr-cont\">"
	for (var i in data.books) {
		if (data.books[i].amReading == "true" || data.books[i].amReading == true) {
			
			reading += "<div class=\"curr-img\ h-entry"><img width=\"80\" height=\"120\" src=\"https://books.google.com/books/content?id=" + data.books[i].id + "&printsec=frontcover&img=1&zoom=5&source=gbs_api\"></div>"
			
			reading += "<div class=\"cssProgress curr-prog\"><div class=\"centre\ e-content">I am on page " + Math.floor(data.books[i].numPages *(data.progress.read / 100)) + " of <em>" + data.books[i].title + "</em> by "  + data.books[i].author + "<div class=\"progress2\"><div class=\"cssProgress-bar\" data-percent=\"" + data.progress.read + "\" style=\"width: " + data.progress.read + "%;\"><span class=\"cssProgress-label\">" + data.progress.read + "%</span></div></div><div class=\"centre\"><em>\"" + data.books[i].abstract + "\"</em></div>"
			}
	document.getElementById("current").innerHTML=reading;
	}
});
