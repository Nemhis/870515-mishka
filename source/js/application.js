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

  var map = new google.maps.Map(document.querySelector('.js-map'), {
    zoom: 16.6,
    disableDefaultUI: true,
    scrollWheel: false,
    center: coordinates
  });

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: 'img/icon-map-pin.svg'
  });
}

var dialog = document.getElementById('cart-dialog');

if (dialog) {
  var confirmButton = dialog.querySelector('.dialog__confirm-button');

  confirmButton.addEventListener('click', function ()  {
    dialog.classList.remove('dialog--opened');
  });

  var openDialog = function () {
    dialog.classList.add('dialog--opened');
  };

  var cartButtons = document.querySelectorAll('.product-card__cart-button');

  Array.prototype.forEach.call(cartButtons, function (button) {
    button.addEventListener('click', openDialog);
  });

  var weekProductButton = document.querySelector('.week-product__button');

  if (weekProductButton) {
    weekProductButton.addEventListener('click', openDialog);
  }
}

