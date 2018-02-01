function quotes() {
    $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&',
        success: function(data) {
            post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-content').html(post.content);
            $('#quote-title').html("— " + post.title);
        },
        cache: false
    });
}

function tweet() {
    var quoteToTweet = post.content.replace(/<\/?[^>]+(>|$)/g, "") + post.title;
    if (quoteToTweet.length > 140) {
        alert('Tweet should be less than 140 characters.');
    } else {
        var twtLink = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quoteToTweet);
        window.open(twtLink, '_blank');
    }
}

$(document).ready(function() {
    quotes();
    $('#get-new-quote-btn').click(quotes);
    $('#tweet-btn').click(tweet);
});