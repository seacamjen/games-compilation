function webcrawlerInit() {
  var canvas = document.getElementById("webcrawlerCanvas");
  var stage = new createjs.Stage("webcrawlerCanvas");
  tunnel = new createjs.Shape();
  var g = tunnel.graphics;
  createjs.Ticker.addEventListener("tick", tick);
  this.circleList = [];
  drawGrid();

  var fireballImg = new Image();
  fireballImg.src = "assets/fireball.png";
  var fireball = new createjs.Bitmap(fireballImg);
  fireball.x = 443;
  fireball.y = 443;

  var shipGraphics = new createjs.Graphics().beginStroke("#FFFFFF").beginFill("#FFFFFF").moveTo(450, 20).lineTo(460, -12).lineTo(450, -4).lineTo(440, -12).closePath();
  var ship = new createjs.Shape(shipGraphics);
  ship.x = canvas.width/2;
  ship.y = canvas.height/2;
  ship.regX = canvas.width/2;
  ship.regY = canvas.height/2;
  ship.rotation = 45;
  stage.addChild(ship, fireball);
  stage.update();
  drawCircle();

  var KEYCODE_UP = 87;
  var KEYCODE_LEFT = 65;
  var KEYCODE_RIGHT = 68;
  var KEYCODE_DOWN = 83;
  var KEYCODE_SPACE = 32;
  var spaceBar = false;
  var leftArrow = false;
  var rightArrow = false;
  var upArrow = false;
  var downArrow = false;

  window.onkeyup = keyUpHandler;
  window.onkeydown = keyDownHandler;

  function keyDownHandler(e) {
    switch(e.keyCode) {
      case KEYCODE_RIGHT: rightArrow = true; break;
      case KEYCODE_LEFT: leftArrow = true; break;
      case KEYCODE_UP: upArrow = true; break;
      case KEYCODE_DOWN: downArrow = true; break;
      case KEYCODE_SPACE: spaceBar = true; break;
    }
  }

  function keyUpHandler(e) {
    switch(e.keyCode) {
      case KEYCODE_RIGHT: rightArrow = false; break;
      case KEYCODE_LEFT: leftArrow = false; break;
      case KEYCODE_UP: upArrow = false; break;
      case KEYCODE_DOWN: downArrow = false; break;
      case KEYCODE_SPACE: spaceBar = false; break;
    }
  }

  function move() {
    if(rightArrow) ship.rotation += 5;
    if(leftArrow)  ship.rotation -= 5;
    // if(spaceBar) fireBullet;
    // if(upArrow) ship.y -= 5;
    // if(downArrow) ship.y += 5;
    stage.update();
  }

  function drawGrid() {
    g.clear();
    g.beginStroke("#FFF");
    g.mt(0,0);
    g.lt(canvas.width, canvas.height);
    g.mt(0, canvas.height/2);
    g.lt(canvas.width, canvas.height/2);
    g.mt(0, canvas.height);
    g.lt(canvas.width, 0);
    g.mt(canvas.width/2, 0);
    g.lt(canvas.width/2, canvas.height);
    g.cp();
    g.beginStroke("#FFF");
    g.dc(canvas.width/2, canvas.height/2, canvas.width/2);
    g.cp();
    g.f("black").dc(canvas.width/2, canvas.height/2, 20);
    stage.addChild(tunnel);
    stage.update();
  }

  function drawCircle() {
    var circle = new createjs.Shape();
    g = circle.graphics;
    g.clear();
    g.beginStroke("#FFF");
    g.dc(canvas.width/2, canvas.height/2, 20);
    // circle.addEventListener("tick", growRadius);
    circleList.push(circle);
    stage.addChild(circle);
    stage.update();
  }

  function growRadius() {
    if (circleList.length > 0) {
      if (circleList[circleList.length-1].graphics.command.radius >= 30) { drawCircle(); }
      for (i = 0; i < circleList.length; i++) {
        if (circleList[i].graphics.command.radius >= canvas.width/2) {
          stage.removeChild(circleList[i]);
          circleList.splice(i, 1);
        }
        circleList[i].graphics.command.radius *= 1.01;
      }
    }
  }

  function tick(event) {
    growRadius();
    move();
    // ship.rotation++;
    stage.update();
  }

}
