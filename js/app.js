var Engine = (function (global) {
  var doc = global.document,
    win = global.window,
    canvas = doc.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    lastTime;

  canvas.width = 500;
  canvas.height = 600;
  doc.body.appendChild(canvas);

  function main() {
    var now = Date.now(),
      dt = (now - lastTime) / 1000.0;
    render();
    update(dt);
   

    lastTime = now;
    win.requestAnimationFrame(main);
  }

  function init() {
    reset();
    lastTime = Date.now();
    main();
  }


  // render the playground
  function render() {
    var rowImages = [
        "images/water-block.png", // 这一行是河。
        "images/stone-block.png", // 第一行石头
        "images/stone-block.png", // 第二行石头
        "images/stone-block.png", // 第三行石头
        "images/grass-block.png", // 第一行草地
        "images/grass-block.png", // 第二行草地
      ],
      numRows = 6,
      numCols = 5,
      row,
      col;

    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        // reseouces.get is from the resource.js its get function
        // covner the image array to the html img content as url
        // console.log(Resources.get(rowImages[row]));
        ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);

        // the draww image function cruly brace the ：
        // image of Resources.get(rowImages[row]),and the location on canvacol * 101, row * 83
        // HTML canvas drawImage() Method
        // https://www.w3schools.com/tags/canvas_drawimage.asp
      }
    }

    renderEntities();
  }

  // render the enemy and player
  function renderEntities() {
    /* 遍历在 allEnemies 数组中存放的作于对象然后调用你事先定义的 render 函数 */
    allEnemies.forEach(function (enemy) {
      enemy.render();
    });

    player.render();
  }

  function update(dt) {
    updateEntities(dt);
    //
  }

  function updateEntities(dt) {
    allEnemies.forEach(function (enemy) {
      enemy.update(dt);
    });
    // first check if there is a crash
    player.checkCollisions();
    // if no crash, then update the item, then go to the destination
    player.update();
  }

  function reset() {
    // 空操作
  }

  Resources.load([
    "images/stone-block.png",
    "images/water-block.png",
    "images/grass-block.png",
    "images/enemy-bug.png",
    "images/char-boy.png",
  ]);
  Resources.onReady(init);

  global.ctx = ctx;
})(this);
