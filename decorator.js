const Decorator = function(name){
  this.name = name;
  this.paintStock = [];
};

Decorator.prototype.inStock = function(){
  return this.paintStock.length;
};

Decorator.prototype.addCan = function(volume){
  this.paintStock.push(volume);
}

Decorator.prototype.paintTotalVolume = function(){
  var sum = 0;
  for (var i=0;i<this.paintStock.length;i++){
    sum = sum + this.paintStock[i];
  }
  return sum;
}

module.exports = Decorator;
