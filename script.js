//Function to grab random quotes from quotesondesign.com. Based on their API.
function quotes() {
    $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&',
        success: function(data) {
            post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-content').html(post.content);
            $('#quote-title').html("— " + post.title);
        },
        //Prevents browser to cache content. Enables grabbing new random quote.
        cache: false
    });
}

//Function to tweet quote
function tweet() {
    //.replace method used to truncate html tags from quotes
    var quoteToTweet = post.content.replace(/<\/?[^>]+(>|$)/g, "") + post.title;
    //Display alert when tweet exceeds 140 characters
    if (quoteToTweet.length > 140) {
        alert('Tweet should be less than 140 characters.');
    } else {
        var twtLink = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quoteToTweet);
        window.open(twtLink, '_blank');
    }
}

$(document).ready(function() {
    //Load random quote on page reload
    quotes();
    $('#get-new-quote-btn').click(quotes);
    $('#tweet-btn').click(tweet);
});