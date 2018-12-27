'use strict';

module.exports = (bpm) => {
  if ( ! bpm.colorArray.length ){
    throw 'Invalid format';
  }
  
  bpm.colorArray.reverse();
  
  for(let i = 0; i < bpm.colorArray.length; i+=4){
    bpm.colorArray[i] = bpm.colorArray[i];
    bpm.colorArray[i + 1] = 100;
    bpm.colorArray[i + 2] = bpm.colorArray[i + 2];
    bpm.colorArray[i + 3] = 0;
    
  }
};