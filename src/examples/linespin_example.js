var Linespin, linespin;

Linespin = require('../linespin');

linespin = new Linespin('Spinning...', 'All done!', 100);

linespin.start();

setTimeout(function() {
  return linespin.stop();
}, 3000);
