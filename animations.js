var path = anime.path('path');
anime({
  targets: '.wave1',
  scaleY: 1.1,
  translateY: 100,
  duration: 5000,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.wave2',
  scaleY: 1.2,
  translateY: 130,
  duration: 6942.0,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
});
