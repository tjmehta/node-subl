subl - Open files in Sublime Text from Node.js
=========

##Installation
```sh
$ npm install subl
```

## Requirements
The `subl` command must be linked in you `PATH`.
You can do this by:

OSX:
  ST3 - `ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl`
  ST2 - `ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl`

WIN: ?

NIX: ?

##Usage
```js
var path = require('path');
var subl = require('subl');
var filepath = path.join(__dirname, foo.txt);
subl(filepath); // opens file in sublime text
```

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
