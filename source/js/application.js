// Menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Maps
function initMap() {
  var coordinates = {lat: 59.938878, lng: 30.323069};

  map = new google.maps.Map(document.querySelector('.js-map'), {
    zoom: 16,
    disableDefaultUI: true,
    scrollWheel: false,
    center: coordinates
  });
}
