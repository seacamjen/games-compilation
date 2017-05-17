var stage;
var character;
var bitmap;
var bitWidth = 107;
var bitHeight = 200;
var splatImg;
var splat;
var splatWidth = 50;
var splatHeight = 47;
var appleImg;
var apple;
var appleWidth = 48;
var appleHeight = 50;
var background;
var backgroundImg;

var KEYCODE_UP = 38;
var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var leftArrow = false;
var rightArrow = false;
var upArrow = false;
var downArrow = false;

function runnerinit() {
  stage = new createjs.Stage("demoCanvas");

  character = new Image();
  character.src = "assets/catboy.png";
  bitmap = new createjs.Bitmap(character);
  bitmap.x = 0;
  bitmap.y = 350;

  splatImg = new Image();
  splatImg.src = "assets/stickeysplat.jpg";
  splat = new createjs.Bitmap(splatImg);
  splat.x = 1000;
  splat.y = 500;

  appleImg = new Image();
  appleImg.src = "assets/apple.png";
  apple = new createjs.Bitmap(appleImg);
  apple.x = 1000;
  apple.y = 300;

  backgroundImg = new Image();
  backgroundImg.src = "assets/background_pjmasks.jpg";
  background = new createjs.Bitmap(backgroundImg);


  playerScore = new createjs.Text('0', 'bold 60px Arial', '#f90014');
  playerScore.x = 800;
  playerScore.y = 0;

  stage.addChild(background, splat, apple, bitmap, playerScore);
  stage.update();

  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);

  window.onkeyup = keyUpHandler;
  window.onkeydown = keyDownHandler;
}



function tick() {
  splat.x -= Math.random() * (4) + 1;
  apple.x -= Math.random() * (4) + 1;
  bitmap.x += 1;
  move();
  if (bitmap.x > 900) {
    bitmap.x = -59;
    bitmap.y = 350;
  }
  if (bitmap.x < -100) {
    bitmap.x = -59;
    bitmap.y;
  }
  if (bitmap.y > 600) {
    bitmap.x = 0;
    bitmap.y = 350;
  }
  if (splat.x > 1000) {
    splat.x = 1000;
    splat.y = Math.random() * (300) + 200;
  }
  if (splat.x < -20) {
    splat.x = 1000;
    splat.y = Math.random() * (300) + 200;
  }
  if (apple.x > 1000) {
    apple.x = 1000;
    apple.y = Math.random() * (300) + 200;
  }
  if (apple.x < -20) {
    apple.x = 1000;
    apple.y = Math.random() * (300) + 200;
  }

  if (splat.x < bitmap.x + bitWidth && splat.x + splatWidth > bitmap.x && splat.y < bitmap.y + bitHeight && splat.y + splatHeight > bitmap.y) {
    splat.x = 1000;
    splat.y = Math.random() * (300) + 200;
    playerScore.text = parseInt(playerScore.text - 100);
    stage.update();
  }

  if (apple.x < bitmap.x + bitWidth && apple.x + appleWidth > bitmap.x && apple.y < bitmap.y + bitHeight && apple.y + appleHeight > bitmap.y) {
    apple.x = 1000;
    apple.y = Math.random() * (300) + 200;
    playerScore.text = parseInt(playerScore.text + 100);
    stage.update();
  }

  if(playerScore.text > 100) {
    winner();
  }

  if(playerScore.text < -500) {
    loser();
  }

}

function winner() {
  stage.removeAllChildren();
  stage.update();
  var win = new createjs.Text('Winner', 'bold 60px Arial', '#f90014');
  win.x = 400;
  win.y = 300;
  stage.addChild(win);
  stage.update();
}

function loser() {
  stage.removeAllChildren();
  stage.update();
  var lose = new createjs.Text('Try Again', 'bold 60px Arial', '#f90014');
  lose.x = 400;
  lose.y = 300;
  stage.addChild(lose);
  stage.update();
}

function jump() {
  createjs.Tween.get(bitmap, {loop: false})
    .to({y: bitmap.y}, 500, createjs.Ease.getPowInOut(3))
    .to({y: bitmap.y -=200}, 1000, createjs.Ease.getPowInOut(7))
    .to({y: bitmap.y +=200}, 1000, createjs.Ease.getPowInOut(7))

}

function keyDownHandler(e) {
  switch(e.keyCode) {
    case KEYCODE_RIGHT: rightArrow = true; break;
    case KEYCODE_LEFT: leftArrow = true; break;
    case KEYCODE_UP: upArrow = true; break;
    case KEYCODE_DOWN: downArrow = true; break;
    console.log(leftArrow);
  }
}

function keyUpHandler(e) {
  switch(e.keyCode) {
    case KEYCODE_RIGHT: rightArrow = false; break;
    case KEYCODE_LEFT: leftArrow = false; break;
    case KEYCODE_UP: upArrow = false; break;
    case KEYCODE_DOWN: downArrow = false; break;

  }
}

function move() {
  if(rightArrow) bitmap.x += 5;
  if(leftArrow) bitmap.x -= 5;
  if(upArrow) bitmap.y -= 5;
  // if(upArrow) jump();
  if(downArrow) bitmap.y += 5;
  stage.update();
}
