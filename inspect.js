'use strict';

const fs = require('fs');
const util = require('util');

fs.readFile('./assets/baldy.bmp', function(err, data){
  if (err) { throw err; }
  console.log(util.inspect(data));
});