// // Enemies our player must avoid
var Enemy = function (x, y, speed) {
  this.x = x;
  this.y = y;
//   this.speed = Math.random() * 250 + 150;
  this.speed = 100;
  console.log(this.speed)
  this.sprite = "images/enemy-bug.png";
};

// // Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt, x) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += dt * this.speed;
  if (this.x >= 505) {
    this.x = -30;
  }
};

