'use strict';

module.exports = (bmp) => {
  if ( ! bmp.colorArray.length ){
    throw 'Invalid File Format';
  }
  for(let i = 0; i < bmp.colorArray.length; i+=4) {
    bmp.colorArray[i+1] = 255;
  }
  console.log('entering the swamp..');
};
