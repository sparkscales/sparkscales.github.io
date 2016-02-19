// ISOTOPE

$(window).load(function() {

  // cache container
  var $container = $('.portfolio').imagesLoaded( function() {

    // initialize isotope
    $container.isotope({
    // options...
    animationEngine: 'best-available',
    itemSelector: '.portfolio__item',
    masonry: {
      columnWidth: 320
    }
    });

  // filter items when filter link is clicked
});
  $('#isotope_filters li a').on('click', function() {
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
  });

});

// FILTER TOGGLE

$('#mobile-button').click(function(event) {

  $('body').toggleClass('is-open');

});

// change size of item by toggling gigante class

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});
