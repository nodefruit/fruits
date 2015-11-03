[![Fruit][logo]][repo-link]

[![CI Buimd][build-image]][build-url]
[![Dependencied][dependencies-image]][dependencies-url]
[![experimental][stability-image]][stability-url]
[![MIT license][license-img]][license-url]
[![Gitter][gitter-img]][gitter-url]

### Introduction:

This is the global package that contains both the fruit ORM module and all its available adapters. If you haven't take a look at its documentation yet, please make sure to do so.

### Installation:
```bash
  $ npm install fruits
```

### How does it work:

Once you require the fruits module :
```
  var fruits = require('fruits');
```

You can get the fruit constructor :
```javascript
  var Fruit = fruits.fruit;
```

You can also get the available adapters :
```javascript
  var mongoAdapter    = fruits.adapters.mongodb
    , mysqlAdapter    = fruits.adapters.mysql
    , postgresAdapter = fruits.adapters.postgresql
```

### Contributing

All contributions are welcome. Let's get this project to the next level.
Significant and valuable contributions will allow you to be part of [Fruit organisation](http://github.com/nodefruit).
See the [contribution guide](http://github.com/nodefruit/fruit/blob/master/CONTRIBUTING.md) for more details

### Community

If you'd like to chat and discuss this project, you can find us here:

- Mailing list: https://groups.google.com/forum/#!forum/nodefruit
- [![Join the chat at https://gitter.im/nodefruit/fruit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nodefruit/fruit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[logo]: https://github.com/nodefruit/fruits/raw/master/pres/logo.png
[repo-link]: https://github.com/nodefruit/fruits
[build-image]: https://api.travis-ci.org/nodefruit/fruits.svg
[build-url]: https://github.com/nodefruit/fruits
[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg
[stability-url]: https://github.com/nodefruit/fruits
[license-img]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://github.com/nodefruit/fruits/blob/master/LICENSE
[dependencies-image]:https://david-dm.org/nodefruit/fruits.svg
[dependencies-url]:https://npmjs.com/package/fruits
[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/nodefruit/fruit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge