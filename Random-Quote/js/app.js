function tweetQuote() {
    var baseTweetURL = "https://twitter.com/intent/tweet?text=";
    var quoteText = $("#quote-text").text();
    var authorText = $("#author-text").text();
    $("#share-on-twitter").attr("href", baseTweetURL + quoteText + authorText);
}
function displayQuote(data) {
    $("#quote-text").text('"' + data.quoteText + '"');
    if (data.quoteAuthor !== "") {
        $("#author-text").text(" - " + data.quoteAuthor);
    } else {
        $("#author-text").text(" - " + "Anonymous");
    }
}
$(document).ready(function() {
    var apiURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(apiURL, displayQuote);
    $("#get-new-quote").on("click", function() {
        $.getJSON(apiURL, displayQuote);
    });
    $("#share-on-twitter").on("click", tweetQuote);
});
