'use strict';

module.exports = (bpm) => {
  if ( ! bpm.colorArray.length ){
    throw 'Invalid format';
  }
  bpm.colorArray.reverse();
};