'use strict';

module.exports = (bpm) => {
  if ( ! bpm.colorArray.length ){
    throw 'Invalid format';
  }

  for(let i = 0; i < bpm.colorArray.length; i++){
    if(bpm.colorArray[i] - bpm.colorArray[i+1] <10 && bpm.colorArray[i+1] - bpm.colorArray[i+2]< 10){
      bpm.colorArray[i] = 0;
      bpm.colorArray[i+1] = 0;
      bpm.colorArray[i+2] = 255;
    }
    
  }
  console.log('infared...engaged');
};
