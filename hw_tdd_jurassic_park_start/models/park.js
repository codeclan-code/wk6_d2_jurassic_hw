const Park = function (name, price, dinoCollection) {
  this.name = name;
  this.price = price;
  this.dinoCollection = ['t-rex', 'oscar'];
}

Park.prototype.addDino = function (dino) {
  this.dinoCollection.push(dino);
};

Park.prototype.killDino = function () {
  this.dinoCollection.pop();
};


Park.prototype.dailyDino = function () {
  this.dailyVisitors = 60;
};
//
Park.prototype.yearlyVisitors = function () {
  this.yearlyVisitors = 60 * 360;
};
//
Park.prototype.totalRevenue = function (price, dinoCollection) {
  this.totalRevenue = this.price * this.dinoCollection.length * 360;
};
// 100 * 2 * 360

module.exports = Park;
