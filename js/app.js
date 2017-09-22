// Enemies our player must avoid
  var Enemy = function(x, y,speed) {
     this.x = x;
     this.y = y;
this.speed =  Math.random()*250+150;
     this.sprite = 'images/enemy-bug.png';
  };

 // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
   Enemy.prototype.update = function(dt,x) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
     // all computers.
     this.x += dt * this.speed
     if(this.x >= 505){
        this.x = -30;
    }

};

 // Draw the enemy on the screen, required method for game
 Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 // Now write your own player class
 // This class requires an update(), render() and
// a handleInput() method.


var Player = function (x, y) {
    this.x = x;
   this.y = y;
    this.sprite = 'images/char-boy.png'
 }
var count = 0;
 Player.prototype.update = function (dt) {
   if(this.y < -11){
       count++;
       if(count%3 === 2){
            alert("good job！！ 点击确定后进入下一盘游戏");
            this.x = 200;
            this.y = 404;
       }
    }
    this.checkCollisions();
 };
 Player.prototype.checkCollisions = function() {
 for (var i = 0; i < allEnemies.length; i++) {
     // 判断 y 轴方向是否发生碰撞
     if (Math.abs(this.y - allEnemies[i].y) < 60) {
         // 判断  x 轴方向是否发生碰撞
         if ((Math.abs(this.x - allEnemies[i].x)) < 60) {
             this.x = 200;
             this.y = 404;
         }
     }
 }
};
 Player.prototype.handleInput = function (movement) {
   switch (movement) {
       case 'left':
        if (this.x > 354 )
        {this.x -= 101; }
       break;
       case 'right':
       if (this .x > 354)
       {this.x += 101;}
        break;
       case 'up':
       if (this.y > 72 )
       {this.y -= 83;}
        break;
       case 'down':
       if (this .y > 321)
       {this.y += 83;}
        break;
    }
}

 Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 var allEnemies = [];
for(var i=0;i<6;i++){
  var bugs = new Enemy(-30,83*(i%3)+72);

  allEnemies.push(bugs);
};
    var player = new Player(101, 83 * 3 + 55)
 // Now instantiate your objects.
 // Place all enemy objects in an array called allEnemies
 // Place the player object in a variable called player


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
