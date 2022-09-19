// turn this into a json data with different attribute

var allEnemies = [];
for (var i = 0; i < 6; i++) {
  var bugs = new Enemy(-30, 83 * (i % 3) + 72);
  allEnemies.push(bugs);
  // console.log(bugs);
  
}

// turn this into a json data with different attribute

// console.log(allEnemies)


var player = new Player(101, 83 * 3 + 55);

// console.log(player)
// // This listens for key presses and sends the keys to your
// // Player.handleInput() method. You don't need to modify this.

// this function is for Player only
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
 
});
