'use strict';
const fs = require('fs');

module.exports = (bmp) => {
  if( ! bmp.colorArray.length ) {
    throw 'Invalid Format';
  }
  bmp.pixelArray.reverse();
  console.log('the pixel array was reversed.');
  
};


  