$(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

var e = document.getElementById('watchme');
e.addEventListener('animationstart', listener, false);
e.addEventListener('animationend', listener, false);
e.addEventListener('animationiteration', listener, false);

e.className = 'slidein';

function listener(e) {
  var l = document.createElement('li');
  switch (e.type) {
    case 'animationstart':
      l.innerHTML = 'Started: elapsed time is ' + e.elapsedTime;
      break;
    case 'animationend':
      l.innerHTML = 'Ended: elapsed time is ' + e.elapsedTime;
      break;
    case 'animationiteration':
      l.innerHTML = 'New loop started at time ' + e.elapsedTime;
      break;
  }
  document.getElementById('output').appendChild(l);
}
