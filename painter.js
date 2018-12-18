"use strict";

const Painter = function(){
  this.stock = [];
};

Painter.prototype.addCan = function(can){
  this.stock.push(can);
};

Painter.prototype.totalPaint = function(){
  let total = 0;
  for (let i=0; i < this.stock.length; i++){
    total += this.stock[i].remaining;
  }
  return total;
};

Painter.prototype.sufficientPaint = function(room){
  if (this.totalPaint() >= room.area){
    return true;
  } else {
    return false;
  }
};

Painter.prototype.depletePaint = function(room){
  let total = 0;
  let subtotal = 0;
  if (this.sufficientPaint(room)) {
    for (let i = 0; total < room.area; i++) {
      subtotal = total;
      total += this.stock[i].remaining;
      this.stock[i].deplete(room.area - subtotal);
    }
  }
};

Painter.prototype.paintRoom = function(room){
  if (this.sufficientPaint(room)) {
    this.depletePaint(room);
    room.paint();
  }
};

Painter.prototype.removeEmpty = function() {
  let newStock = [];
  for (let i = 0; i < this.stock.length; i++ ) {
    if (!(this.stock[i].isEmpty())) {
      newStock.push(this.stock[i]);
    }
  }
  this.stock = newStock;
};


module.exports = Painter;
