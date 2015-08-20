n = 1

$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
    $.get("/tweets.json?page=" + n, function(tweetsNew) {
      for (var i = 0; i < tweetsNew.length; i++) {
        $("ul.tweets").append("<li class=tweet>" + "<div class=body>" + tweetsNew[i].text + "</div>" + "<div class=user>" + tweetsNew[i].username + "</div>" + "</li>")
      }
    });
  };
});
