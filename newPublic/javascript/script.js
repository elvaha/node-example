(function ($) {

    $.ajax({
        type: 'GET',
        url: '/tweet',
        success: function (data) {
            for (var i = 0; i < data.tweets.length; i++) {
                appendNewTweet(data.tweets[i]);
            }
        }
    });


    function appendNewTweet(tweet) {
        var newTweet = '<div class="tweet-container">' +
            '<p class="tweet-time">' + new Date(tweet.time).toLocaleDateString() + '</p>' +
            '<p class="tweet-body">' + tweet.text + '</p>' +
            '</div>'

        $('.tweets').prepend(newTweet);
    }

    $('.btn-tweet').click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/tweet',
            contentType: 'application/json',
            data: JSON.stringify({
                tweet: $('#new-tweet').val()
            }),
            success: function (data) {
                appendNewTweet(data);
                $('#new-tweet').val('');
            }
        });

    })


})(jQuery)