# linespin

Simple progress output

Extracted from [music.json](https://github.com/geekjuice/musicjson)


## Why?

It's nice to know that your program is running and not dead with a simple
spinner animation


## Usage

```shell
  $ npm install linespin
```

```javascript
  // linespin_example.js

  var Linespin = require('./linespin');

  // Create new instance of linespin
  var linespin = new Linespin('Spinning...', 'All done!', 100);

  // Start spinner at beginning of task
  linespin.start();


  // Some long running task...
  linespin.error('Error!');

  // Continuing process...
  linespin.warn('Warning!');

  // Stop at the end of task
  linespin.stop();
```


```shell
  $ node linespin_example.js
    [/] Spinning...

  # During process...

  $ node linespin_example.js
    [!] Warning!        # red
    [!] Error!          # Yellow
    [-] Spinning...     # Blue

  # On finish

  $ node linespin_example.js
    [✓] All done!       # Green
```


## Notes
* Assumes your progress does not print to console/stdout as the spinner works by
  replacing the same line over and over again to produce the _animation_
* Add editable color options
* ~~Need to add Gruntfile~~



## License
Linespin is released under the MIT License.


