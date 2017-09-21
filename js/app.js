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
   if(this.y === -11){
       count++;
       //经过测试，经过3ms后，就可以实现到达河岸，并网页输出胜利指示，确定后，即可回到原位。
       if(count%3 === 2){
            alert("good job！！ 点击确定后进入下一盘游戏");
            this.x = 200;
            this.y = 404;
       }
    }

 }
 Player.prototype.handleInput = function (movement) {
   switch (movement) {
       case 'left': this.x -= 101; break;
       case 'right': this.x += 101; break;
       case 'up': this.y -= 83; break;
       case 'down': this.y += 83; break;
    }
}
Player.prototype.checkCollisions = function(){
    for(var i=0;i<allEnemies.length;i++){
        //首先判断player和enemy是否在同一行（此处因为我所设置的player和enemy是每一行所在位置的y坐标是相同的）
        if(this.y === allEnemies[i].y){
            if((Math.abs(this.x - allEnemies[i].x))<40){
                this.x =200;
                this.y =404;
            }
       }
    }
};

 Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 var allEnemies = [];
//定义6个Enemy，每行两个，每一行的初始位置是固定的
for(var i=0;i<6;i++){
  var bugs = new Enemy(-30,83*(i%3)+72);
  //将所有bugs都添加到allEnemies数组中
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
