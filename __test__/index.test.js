'use strict';
//referenced lab-00 //not sure what to do for tests //will revisit

let pol = require('../pol.js');

describe('proof of life', () => {

  it('lives by default', () => {
    expect(pol.isAlive()).toBeTruthy();
  });

  it('dies with a param', () => {
    expect(pol.isAlive('x')).toBeFalsy();
  });

});



