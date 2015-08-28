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

$(document).ready( function() {

var $grid = $('.portfolio').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: '.portfolio__item',
    transitionDuration: '0.6s',
    masonry: {
      columnWidth: 320
    }
    });
  });
});
