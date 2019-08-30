// Set the Access Token
var accessToken = "8ad632e29bb7fe21b8c0dbaedbd4df10a1b4374aa45b2e5e5baf78e7c66f88bc"

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.slice(0, 3).reverse(), function(i, val) {                
          $('#dribbbleShots').prepend(
            '<li class="shot col-sm-4" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></li>'
            )
        })
      }
      else {
        $('#dribbbleShots').append('<p>Sorry, No shots yet</p>');
      }
    }
});


// API Variables

//Image width 800x600 (Animated)
  // val.images.hidpi 
//Image width 400x300
  // val.images.normal
//Image width 200x150
  // val.images.teaser
//Title
  // val.title
//Description
  // val.description
//URL
  // val.html_url


