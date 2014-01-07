
# linespin_example.coffee

Linespin = require '../linespin'

# Create new instance of linespin
linespin = new Linespin 'Spinning...', 'All done!', 100

# Start spinner at beginning of task
linespin.start()

# Error
setTimeout ->
  linespin.error 'Error!'
, 1000

# Warning
setTimeout ->
  linespin.warn 'Warning...'
, 3000

# Some long running task...
setTimeout ->
  # Stop at the end of task
  linespin.stop()
, 5000
