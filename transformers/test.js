'use strict';

module.exports = (bpm) => {
  if ( ! bpm.colorArray.length ){
    throw 'Invalid format';
  }

  for(let i = 0; i < bpm.colorArray.length; i++){
    // if(bpm.colorArray[i] === 255 && bpm.colorArray[i+1] === 255 && bpm.colorArray[i+2] === 255){
    //   bpm.colorArray[i] = 255;
    //   bpm.colorArray[i + 1] = 0;
    //   bpm.colorArray[i + 2] = 0;
    //   bpm.colorArray[i + 3] = 0;
    // }
    if( i < 180){
      console.log(bpm.colorArray[i]);


    }
  }};