const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;

  beforeEach(function () {
    park = new Park('dinopark', 100, ['t-rex', 'oscar']);  })
    dino1 = new Dinosaur('kevin', 'herbivore', 50);
    dino2 = new Dinosaur('linda', 'herbivore', 10);

    it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, 'dinopark');
    });

    it('should have a ticket price', function () {
      const actual = park.price;
      assert.strictEqual(actual, 100);
    });

    it('should have a collection of dinosaurs', function(){
      const actual = park.dinoCollection;
      assert.deepStrictEqual(actual, ['t-rex', 'oscar']);
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDino(dino1);
      const expected = ['t-rex', 'oscar', dino1];
      assert.deepStrictEqual(park.dinoCollection, expected)
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.killDino(dino1);
      const expected = ['t-rex'];
      assert.deepStrictEqual(park.dinoCollection, expected)

    });

    it('should be able to find the dinosaur that attracts the most visitors', function(){
      const actual = dino1.guestsAttractedPerDay;
      assert.strictEqual(actual, 50)
    });

    it('should be able to find all dinosaurs of a particular species', function(){
      const actual = dino1.species;
      assert.strictEqual(actual, 'kevin', 'herbivore')

    });

    it('should be able to calculate the total number of visitors per day', function(){
      park.dailyDino([dino1.guestsAttractedPerDay, dino2.guestsAttractedPerDay]);
      const expected = 60;
      assert.strictEqual(park.dailyVisitors, expected)
    });

    it('should be able to calculate the total number of visitors per year', function(){
      park.yearlyVisitors()
      const expected = 21600
      assert.strictEqual(park.yearlyVisitors, expected)
    });

    it('should be able to calculate total revenue for one year', function(){
      park.totalRevenue(park.price, park.dinoCollection)
      const expected = 72000
      assert.strictEqual(park.totalRevenue, expected)

    });

  });
