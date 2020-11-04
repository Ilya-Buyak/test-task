import './style.css';

export function sliderInitialization() {
  let Flickity = require('flickity');
  let flkt = new Flickity( '.slider', {
    freeScroll: false,
    wrapAround:  true,
    pageDots: false,
    lazyLoad: true,
    draggable: false
  });
  let flkty = new Flickity('.sliderPhoto', {
    freeScroll: false,
    wrapAround:  true,
    pageDots: false,
    lazyLoad: true,
    draggable: false
  });
  let flk = new Flickity('.sliderCards', {
    freeScroll: false,
    wrapAround:  true,
    pageDots: true,
    draggable: false,
    groupCells: 2,
    contain: true,
    prevNextButtons: true,
    percentPosition: false,
    adaptiveHeight: true
  })
}

sliderInitialization()