const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator',function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator("John");
  });

  it('should have an empty paint stock',function(){
    assert.strictEqual(decorator.inStock(),0);
  });

  describe('Paint',function(){
    it('should add a can of paint with 20 liters',function(){
      decorator.addCan(20);
      assert.deepStrictEqual(decorator.paintStock,[20])
    })

    it('should have a total volume of 100 liters',function(){
      decorator.addCan(30);
      decorator.addCan(20);
      decorator.addCan(50);
      assert.deepStrictEqual(decorator.paintTotalVolume(),100)
    })
  })



})
