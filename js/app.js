// Enemies our player must avoid
  var Enemy = function(x, y,speed) {
     this.x = x;
     this.y = y;
this.speed = speed;
     this.sprite = 'images/enemy-bug.png';
  };

 // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
   Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
     // all computers.
     this.x += dt * this.speed
};

 // Draw the enemy on the screen, required method for game
 Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 Enemy.prototype.checkCollision = function (player) {
    console.log(`check collision() is working, player: ${player.x}, ${player.y}`)
  }
 // Now write your own player class
 // This class requires an update(), render() and
// a handleInput() method.


var Player = function (x, y) {
    this.x = x;
   this.y = y;
    this.sprite = 'images/char-boy.png'
 }

 Player.prototype.update = function (dt) {

 }
 Player.prototype.handleInput = function (movement) {
   switch (movement) {
       case 'left': this.x -= 101; break;
       case 'right': this.x += 101; break;
       case 'up': this.y -= 83; break;
       case 'down': this.y += 83; break;
    }
}
 Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 // Now instantiate your objects.
 // Place all enemy objects in an array called allEnemies
 // Place the player object in a variable called player

var allEnemies = [new Enemy(0, 83 * 2 + 55, 200)]
 var player = new Player(101, 83 * 3 + 55)
 // This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
 document.addEventListener('keyup', function(e) {
    var allowedKeys = {
         37: 'left',
         38: 'up',
         39: 'right',
         40: 'down'
   };

    player.handleInput(allowedKeys[e.keyCode]);
 });