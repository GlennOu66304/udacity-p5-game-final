var Player = function (x, y) {
  this.x = x;
  this.y = y;
  this.sprite = "images/char-boy.png";
};

var count = 0;

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// mouse up left right
Player.prototype.handleInput = function (movement) {
  switch (movement) {
    case "left":
      if (this.x > 0) {
        this.x -= 101;
      }
      break;
    case "right":
      if (this.x < 400) {
        this.x += 101;
      }
      break;
    case "up":
      if (this.y > 0) {
        this.y -= 83;
      }
      break;
    case "down":
      if (this.y > 380) {
        this.y += 83;
      }
      break;
  }
};

// the limitation place where a player can go
Player.prototype.checkCollisions = function () {
  for (var i = 0; i < allEnemies.length; i++) {
    // 判断 y 轴方向是否发生碰撞
    // ideally, the verticle side should have enemy as well

    if (Math.abs(this.y - allEnemies[i].y) < 60) {
      //   console.log("crash on y ");
      // 判断  x 轴方向是否发生碰撞
      if (Math.abs(this.x - allEnemies[i].x) < 60) {
        console.log(" hurt by enemy!");
        alert("hurt by enemy!Game Over!");
        this.x = 200;
        this.y = 404;
      }
    }
  }
};
Player.prototype.update = function (dt) {
  if (this.y < -11) {
    count++;
    if (count % 3 === 2) {
      alert("good job!! 点击确定后进入下一盘游戏");
      this.x = 200;
      this.y = 404;
    }
  }
};
