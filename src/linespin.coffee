
###
  Linespin - Simple Progress Output
###

'use strict'

c = require './color'

class Linespin

  _speed = undefined
  _stdout = process.stdout
  _spin = ['-', '\\', '|', '/']
  _i = 0

  constructor: (@message, @doneMessage, @speed) ->
    @state = 'stopped'
    @message ?= 'Please wait...'
    @doneMessage ?= 'Finished'
    @speed ?= 200

  start: ->
    if @state is 'stopped'
      @state = 'running'
      _firstMessage @message
    else
      _formatMessage @message
    _continue @

  stop: (message) ->
    @state = 'stopped'
    _reset()
    _lastMessage message || @doneMessage

  error: (message) ->
    _errorMessage message

  warn: (message) ->
    _warningMessage message

  # Private Methods

  _reset = ->
    _i = 0

  _continue = (_this) ->
    that = _this
    setTimeout ->
      that.start() if that.state is 'running'
    , that.speed

  _spinner = ->
    "#{c.yellow}[#{_spin[_i = (_i+1) % 4]}]#{c.reset}"

  _firstMessage = (message) ->
    _stdout.write "#{_spinner()} #{c.blue}#{message}\n"

  _formatMessage = (message) ->
    _stdout.write "#{c.rewrite}#{_spinner()} #{c.blue}#{message}#{c.reset}\n"

  _lastMessage = (message) ->
    _stdout.write "#{c.rewrite}#{c.green}[✓] #{c.blue}#{message}#{c.reset}\n"

  _errorMessage = (message) ->
    _stdout.write "#{c.rewrite}#{c.red}[!] #{message}#{c.reset}\n\n"

  _warningMessage = (message) ->
    _stdout.write "#{c.rewrite}#{c.yellow}[!] #{message}#{c.reset}\n\n"

# Export
module.exports = Linespin
