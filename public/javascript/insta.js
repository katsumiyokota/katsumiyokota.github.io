var feed = new Instafeed({
  get: 'user',
  userId: 1205243571,
  accessToken: '1205243571.467ede5.0c43d648f7cb45908fc574b44588aff9',
  link: 'true',
  clientId: '7cc9252718494f4aa5bbcd4cd6bcd7fa',
  limit: '15',
  resolution: 'standard_resolution',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    })
    if (!this.hasNext()) {
      $('#load-more').hide();
    };
  },
  template:'<a href="{{link}}" target="_blank"><li><figure><img src="http://{{image}}" alt="{{id}}"><figcaption><span><i class="fa fa-heart"></i></span>{{likes}}</figcaption></figure></li></a>',
});

// call feed.next() on button click
$('#load-more').on('click', function() {
  feed.next();
});

feed.run();
