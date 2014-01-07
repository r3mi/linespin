var Linespin, linespin;

Linespin = require('../linespin');

linespin = new Linespin('Spinning...', 'All done!', 100);

linespin.start();

setTimeout(function() {
  return linespin.error('Error!');
}, 1000);

setTimeout(function() {
  return linespin.warn('Warning...');
}, 3000);

setTimeout(function() {
  return linespin.stop();
}, 5000);
