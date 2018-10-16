const Decorator = function(name){
  this.name = name;
  this.paintStock = 0;
};

// Decorator.prototype.inStock = function(){
//   return this.paintStock.length;
// };

Decorator.prototype.addCan = function(volume){
  // this.paintStock.push(volume);
  this.paintStock = this.paintStock + volume;
}

// Decorator.prototype.paintTotalVolume = function(){
//   var sum = 0;
//   for (var i=0;i<this.paintStock.length;i++){
//     sum = sum + this.paintStock[i];
//   }
//   return sum;
// }

Decorator.prototype.enough = function(room){
  if(room.area <= this.paintStock){
    return true;
  } else {
    return false;
  }
}

// Get area of room
// check volume of paint
// if < cannot paint, else can paint. Subtract from stock

module.exports = Decorator;
