(function($){

    $('.btn').click(function(){
        var x = Math.round(Math.random() * 500);
        var y = Math.round(Math.random() * 500);

        $('.kitten').append('<img src="http://placekitten.com/' + x + '/' + y + '">')
    });
    
})(jQuery)
