// var $grid = $('.portfolio').isotope({
//   itemSelector: '.portfolio__item',
//   transitionDuration: '0.6s',
//   masonry: {
//     columnWidth: 320
//   }
//     // layoutMode: 'packery'
// });
// // layout Isotope after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.isotope('layout');
// });

// $(document).ready( function() {
//
// var $grid = $('.portfolio').imagesLoaded( function() {
//   // init Isotope after all images have loaded
//   $grid.isotope({
//     itemSelector: '.portfolio__item',
//     transitionDuration: '0.6s',
//     masonry: {
//       columnWidth: 320
//     }
//     });
//   });
//   $('#isotope_filters li a').on('click', function() {
//     var selector = $(this).data('filter');
//     $grid.isotope({
//       filter: selector
//     });
//   });
// });

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
    });

    // filter items when filter link is clicked
    $('#isotope_filters li a').on('click', function() {
    var selector = $(this).attr('data-filter');
    $container.isotope({
    filter: selector
    });

  });
});



$(document).ready(function() {

  $('#mobile-button').click(function(event) {
    $('body').toggleClass('is-open');
  });
});

// $(window).scroll(function() {
// if ($(this).scrollTop() > 0){
//     $('body').addClass("sticky");
//   }
//   else{
//     $('body').removeClass("sticky");
//   }
// });
