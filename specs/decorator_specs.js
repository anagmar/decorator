const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator',function(){
  let decorator;

  beforeEach(function(){
    decorator = new Decorator("John");
    room1 = new Room(30);
    room2 = new Room(100);
    room3 = new Room(50);
    room4 = new Room(100000);
  });

  it('should have an empty paint stock',function(){
    assert.strictEqual(decorator.inStock(),0);
  });

  describe('Room',function(){

    it('should have an area of 30 in room 1',function(){
      assert.strictEqual(room1.area,30);
    })

    it('should not be painted at the moment in room 2',function(){
      assert.strictEqual(room2.painted,false)
    })

    it('should let us paint room 3',function(){
      room3.paintIt();
      assert.strictEqual(room3.painted,true);
    })
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
