"use strict";

const assert = require('assert');
const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

let painter1;
let room1;
let paintCan1;
let paintCan2;

describe('room', function() {
  beforeEach(function(){
    room1 = new Room(50);
  });
  it('should have an area in square metres', function(){
    assert.strictEqual(room1.area, 50);
  });
  it('should start not painted', function(){
    assert.strictEqual(room1.painted, false);
  });
  it('should be able to be painted', function(){
    room1.paint();
    assert.strictEqual(room1.painted, true);
  });
});
