#Styliner-less

This library adds [LESS](http://lesscss.org) support to [Styliner](https://github.com/SLaks/Styliner).

Usage:

```javascript
var Styliner = require("styliner");
require("styliner-less")(Styliner);
```

That's it; you can now reference `.less` files in `<link>` tags and they will be processed appropriately.