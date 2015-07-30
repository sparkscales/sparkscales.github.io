$(window).scroll(function() {
if ($(this).scrollTop() > 30){
    $('#header').addClass("sticky");
  }
  else{
    $('#header').removeClass("sticky");
  }
});

var $grid = $('.portfolio').isotope({
  itemSelector: '.portfolio__item',
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
