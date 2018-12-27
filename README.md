![CF](http://i.imgur.com/7v5ASc8.png) LAB 05
=================================================

## Lab 05 Bitmap Project

### Author: Ryan Gallaway and George Raymond

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/05-project.svg?branch=master)](https://www.travis-ci.com/rkgallaway/05-project)

* [repo](https://github.com/rkgallaway/05-project)
* [travis](https://www.travis-ci.com/rkgallaway/05-project)
* [server](https://lab-05-bitmap-project.herokuapp.com)

### Modules
#### `index.js`
##### Exported Values and Methods
greenFlip, greyscale, infared, invert, johnZombie, redFlip, shrek, test

###### Method descriptions
greenFlip inverts color scheme and enhances greens
greyscale converts image to grey tones
infared converts image to red base tones
invert rotates image 180* and splits on y axis
johnZombie darkens image and outlines in yellow
redFlip inverts color scheme and enhances reds
shrek converts image to green tones
test convers image to a brown-bag canvas with green ouline

###### Image samples
modified image filepath contains the method used.
for example:  baldy.greenFlip.bmp contains an image that incorporates the greenFlip method.

### Setup
#### `.env` requirements
* `PORT` - declared in ENV

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns altered bmp images.

#### Tests
* npm test (runs unit tests)
* npm run  lint (runs linter tests)
* node index.js ./assets/baldy.bmp <transformer method> (runs node test)
* available transformer methods: greenFlip, greyscale, infared, invert, johnZombie, redFlip, shrek, test
<!-- * What assertions need to be / should be made? -->

