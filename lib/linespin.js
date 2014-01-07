/*
  Linespin - Simple Progress Output
*/

'use strict';
var Linespin, c;

c = require('./color');

Linespin = (function() {
  var _continue, _errorMessage, _firstMessage, _formatMessage, _i, _lastMessage, _reset, _speed, _spin, _spinner, _stdout, _warningMessage;

  _speed = void 0;

  _stdout = process.stdout;

  _spin = ['-', '\\', '|', '/'];

  _i = 0;

  function Linespin(message, doneMessage, speed) {
    this.message = message;
    this.doneMessage = doneMessage;
    this.speed = speed;
    this.state = 'stopped';
    if (this.message == null) {
      this.message = 'Please wait...';
    }
    if (this.doneMessage == null) {
      this.doneMessage = 'Finished';
    }
    if (this.speed == null) {
      this.speed = 200;
    }
  }

  Linespin.prototype.start = function() {
    if (this.state === 'stopped') {
      this.state = 'running';
      _firstMessage(this.message);
    } else {
      _formatMessage(this.message);
    }
    return _continue(this);
  };

  Linespin.prototype.stop = function() {
    this.state = 'stopped';
    _reset();
    return _lastMessage(this.doneMessage);
  };

  Linespin.prototype.error = function(message) {
    return _errorMessage(message);
  };

  Linespin.prototype.warn = function(message) {
    return _warningMessage(message);
  };

  _reset = function() {
    return _i = 0;
  };

  _continue = function(_this) {
    var that;
    that = _this;
    return setTimeout(function() {
      if (that.state === 'running') {
        return that.start();
      }
    }, that.speed);
  };

  _spinner = function() {
    return "" + c.yellow + "[" + _spin[_i = (_i + 1) % 4] + "]" + c.reset;
  };

  _firstMessage = function(message) {
    return _stdout.write("" + (_spinner()) + " " + c.blue + message + "\n");
  };

  _formatMessage = function(message) {
    return _stdout.write("" + c.rewrite + (_spinner()) + " " + c.blue + message + c.reset + "\n");
  };

  _lastMessage = function(message) {
    return _stdout.write("" + c.rewrite + c.green + "[✓] " + c.blue + message + c.reset + "\n");
  };

  _errorMessage = function(message) {
    return _stdout.write("" + c.rewrite + c.red + "[!] " + message + c.reset + "\n\n");
  };

  _warningMessage = function(message) {
    return _stdout.write("" + c.rewrite + c.yellow + "[!] " + message + c.reset + "\n\n");
  };

  return Linespin;

})();

module.exports = Linespin;
