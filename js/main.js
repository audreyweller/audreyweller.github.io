$(document).ready(function() {
  $(".js-check-it-out").on("click", function() {
    $(".fullscreen").addClass("modify");
    $(window).scrollTo('.work', 500, { offset: -180 });
  });

  var wHeight = $( window ).height();
  var isMobile = $( window ).width() < 768;

  $('.work').waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        $(".fullscreen").addClass("modify");
        $(".navbar").addClass("scrolld");
      } else {
        $(".fullscreen").removeClass("modify");
        $(".navbar").removeClass("scrolld");
      }
    },
    offset: (isMobile) ? 0 : (5 * wHeight / 6) + 'px'
  })
});
