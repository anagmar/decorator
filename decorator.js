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

module.exports = Decorator;
