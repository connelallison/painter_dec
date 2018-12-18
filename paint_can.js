"use strict";

const PaintCan = function(capacity){
  this.capacity = capacity;
  this.remaining = capacity;
};

PaintCan.prototype.empty = function(){
  this.remaining = 0;
};

PaintCan.prototype.deplete = function(amount) {
  if (amount <= this.remaining) {
    this.remaining -= amount;
  } else {
    this.empty();
  }

}

PaintCan.prototype.isEmpty = function(){
  if (this.remaining === 0){
    return true;
  } else {
    return false;
  }
};

module.exports = PaintCan;
