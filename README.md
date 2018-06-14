# esm-iso

An [esm](https://www.npmjs.com/package/esm) companion for isomorphic JS modules.

```sh
node -r esm -r esm-iso server.js
```

Example with express:
```js
import path from 'path';
import express from 'express';

const redirect = Object.assign(
  Object.create(null),
  {
    // import * from '/m/generic';
    // =>
    // import * from '/m/detailed/path/esm/index.js';
    'generic': 'detailed/path/esm/index.js'
  }
);

const app = express();
app.use('/m/', (req, res, next) => {
  const mod = req.url.replace(/\?[\S\s]*$/, '').replace(/^\/|\/$/g, '');
  if (mod in redirect) res.redirect('/m/' + redirect[mod]);
  else next();
});
app.use('/m/', express.static(
  // that's it, your browser can load any module
  path.join(__dirname, 'node_modules')
));

import module from '/m/generic';
module.log('🎉');
```

If you want a more explicit version that uses `/node_modules/` instead of `/m/` as both client and server loader, feel free to check [slash-node-modules-loader](https://www.npmjs.com/package/slash-node-modules-loader) out: same loader with a less magic absolute path.
