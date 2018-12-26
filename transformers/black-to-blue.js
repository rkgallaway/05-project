'use strict';

module.exports = (bmp) => {
  if ( ! bmp.colorArray.length ){
    throw 'Invalid File Format';
  }
  for(let i = 0; i < bmp.colorArray.length; i+4) {
    if( bmp.colorArray[i] === 255 && bmp.colorArray[i+1] === 255 && bmp.colorArray[i+2] === 255 ){
      bmp.colorArray[i] = 255;
      bmp.colorArray[i+1] = 0;
      bmp.colorArray[i+2] = 0;
    }
  }
  console.log('turning the blacks to blues');
};

 