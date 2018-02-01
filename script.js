function quotes() {
    $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&',
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-content').html(post.content);
            $('#quote-title').html("— " + post.title);
        },
        cache: false
    });
}
$(document).ready(function() {
    quotes();
    $('#get-new-quote-btn').click(quotes);
});