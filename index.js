'use strict';

const fs = require('fs');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
// const writeFile = uril.promisify(fs.writeFile);
const pol = require('./pol.js');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.size = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.headersize = buffer.readInt32LE(14);
  this.width = buffer.readInt32LE(18);
  this.height = buffer.readInt32LE(22);
  this.bitsPerPixel = buffer.readInt16LE(28);
  this.colorArray = buffer.slice(54, this.offset);
  this.pixelArray = buffer.slice(1078);
  if ( ! this.colorArray.length ) {
    throw 'not a valid bmp format';
  }

};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};


/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
const transforms = {
  greyscale: require('./transformers/greyscale'),
  invert: require('./transformers/invert'),
  brownBag: require('./transformers/brown-bag'),
  infrared: require('./transformers/infrared'),
  shrek: require('./transformers/shrek'),
  redFlip: require('./transformers/red-flip'),
  greenFlip: require('./transformers/green-flip'),
  johnZombie: require('./transformers/john-zombie'),
};

// ------------------ GET TO WORK ------------------- //

function transformWithCallbacks() {


  fs.readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    bitmap.parse(buffer);

    bitmap.transform(operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and thew new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallbacks();

