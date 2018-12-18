"use strict";

const assert = require('assert');
const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

let painter1;
let room1;
let paintCan1;
let paintCan2;

describe('paintCan', function() {
  beforeEach(function(){
    paintCan1 = new PaintCan(20);
  });
  it('should have a number of litres of paint', function(){
    assert.strictEqual(paintCan1.remaining, 20);
  });
  it('should be able to check if its empty', function(){
    assert.strictEqual(paintCan1.isEmpty(), false);
  });
  it('should be able to fully empty itself of paint', function(){
    paintCan1.empty();
    assert.strictEqual(paintCan1.isEmpty(), true);
  });
  it("should be able to partially empty itself of paint", function() {
    paintCan1.deplete(10);
    assert.strictEqual(paintCan1.remaining, 10);
    paintCan1.deplete(20);
    assert.strictEqual(paintCan1.remaining, 0);
  });
});
