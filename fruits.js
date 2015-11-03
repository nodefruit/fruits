/* بسم الله الرحمن الرحيم */

module.exports  = {
    fruit       : requie('fruit')
  , adapters    : {
      mongodb   : require('fruit-mongodb')
    , mysql     : require('fruit-mysql')
    , postgresql: require('fruit-postgresql')
  }
};