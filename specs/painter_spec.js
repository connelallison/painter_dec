"use strict";

const assert = require('assert');
const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

let painter1;
let room1;
let paintCan1;
let paintCan2;

describe('painter', function() {
  beforeEach(function(){
    painter1 = new Painter();
    room1 = new Room(50);
    paintCan1 = new PaintCan(30);
    paintCan2 = new PaintCan(30);

  });
  it('should start with an empty paint stock', function(){
    assert.strictEqual(painter1.stock.length, 0);
  });
  it('should be able to add a can of paint to paint stock', function(){
    painter1.addCan(paintCan1);
    assert.strictEqual(painter1.stock.length, 1);
  });
  it('should be able to calculate total litres paint it has in stock', function(){
    assert.strictEqual(painter1.totalPaint(), 0);
    painter1.addCan(paintCan1);
    assert.strictEqual(painter1.totalPaint(), 30);
  });
  it('should be able to calculate whether it has enough paint to paint a room', function(){
    painter1.addCan(paintCan1);
    assert.strictEqual(painter1.sufficientPaint(room1), false);
    painter1.addCan(paintCan2);
    assert.strictEqual(painter1.sufficientPaint(room1), true);
  });
  it('should be able to paint room if it has enough paint in stock', function(){
    painter1.addCan(paintCan1);
    painter1.paintRoom(room1);
    assert.strictEqual(room1.painted, false);
    painter1.addCan(paintCan2);
    painter1.paintRoom(room1);
    assert.strictEqual(room1.painted, true);
  });
  it("should be able to decrease amount of paint in stock when painting a room", function() {
    painter1.addCan(paintCan1);
    painter1.addCan(paintCan2);
    painter1.paintRoom(room1);
    assert.strictEqual(painter1.totalPaint(), 10);
    assert.strictEqual(room1.painted, true);
    assert.strictEqual(paintCan1.remaining, 0);
    assert.strictEqual(paintCan2.remaining, 10);
  });
  it("should be able to remove empty paint cans from stock", function() {
    painter1.addCan(paintCan1);
    painter1.addCan(paintCan2);
    painter1.paintRoom(room1);
    painter1.removeEmpty();
    assert.deepStrictEqual(painter1.stock, [paintCan2]);
  });
});
