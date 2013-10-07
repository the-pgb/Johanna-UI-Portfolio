//= require_tree .


//-- Waypoints

$('.work-page__img-wrap').waypoint(function(direction) {
  $(this).children('.detail').addClass('animate');
}, { offset: 200 });

//-- Fixed nav

$('.work').waypoint(function(direction) {
  $('.index .nav-bar').toggleClass('release');
}, { offset: 40 });

//-- Nav scroller

var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
    return false;
});


//-- Transitions

$('.work__item').hover(function() {
  $(this).find('.thumb').toggleClass('fade');
});

//-- Project next + prev links

$('.project-link').hover(function() {
  $(this).next('.project-link__title').toggleClass('visible');
});
