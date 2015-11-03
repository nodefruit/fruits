/* بسم الله الرحمن الرحيم */

module.exports  = {
    fruit       : require('fruit')
  , adapters    : {
      mongodb   : require('fruit-mongodb')
    , mysql     : require('fruit-mysql')
    , postgresql: require('fruit-postgresql')
  }
};