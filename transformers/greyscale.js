'use strict';
/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
module.exports = (bmp) => {
  if(! colorArray.length ){
    throw 'Ivalid format';
  }
  
  for(let i = 0; i < bmp.colorArray.length; i+=4){
    const greyScale = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2])/3;
    bmp.colorArray[i] = greyScale;
    bmp.colorArray[i+1] = greyScale;
    bmp.colorArray[i+2] = greyScale;

  }
  console.log('made a greyscaled verion');
};