var stage, character, catboy, catboyImg, gekko, gekkoImg, owlette, owletteImg, bitmap, bitWidth, bitHeight, splatImg, splat, splatWidth = 50, splatHeight = 47, appleImg, apple, appleWidth = 48, appleHeight = 50, background, backgroundImg, backgroundWin, backgroundWinImg;

var KEYCODE_UP = 38, KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39, KEYCODE_DOWN = 40, leftArrow = false, rightArrow = false, upArrow = false, downArrow = false;

function runnerinit() {
  stage = new createjs.Stage("demoCanvas");

  catboyImg = new Image();
  catboyImg.src = "assets/catboy.png";
  catboy = new createjs.Bitmap(catboyImg);
  catboy.x = 300;
  catboy.y = 350;

  owletteImg = new Image();
  owletteImg.src = "assets/owlette.png";
  owlette = new createjs.Bitmap(owletteImg);
  owlette.x = 600;
  owlette.y = 350;

  gekkoImg = new Image();
  gekkoImg.src = "assets/gekko.png";
  gekko = new createjs.Bitmap(gekkoImg);
  gekko.x = 0;
  gekko.y = 350;

  splatImg = new Image();
  splatImg.src = "assets/stickeysplat_red.png";
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

  backgroundWinImg = new Image();
  backgroundWinImg.src = "assets/background_winning.png";
  backgroundWin = new createjs.Bitmap(backgroundWinImg);


  playerScore = new createjs.Text('0', 'bold 60px Arial', '#f90014');
  playerScore.x = 800;
  playerScore.y = 0;

  catboyText = new createjs.Text('Catboy', 'bold 60px Arial', '#f90014');
  catboyText.x = 400;
  catboyText.y = 0;
  catboyText.addEventListener("click", addCatboy);

  owletteText = new createjs.Text('Owlette', 'bold 60px Arial', '#f90014');
  owletteText.x = 700;
  owletteText.y = 300;
  owletteText.addEventListener("click", addOwlette);

  gekkoText = new createjs.Text('Gekko', 'bold 60px Arial', '#f90014');
  gekkoText.x = 100;
  gekkoText.y = 300;
  gekkoText.addEventListener("click", addGekko);


  stage.addChild(catboyText, owletteText, gekkoText);
  stage.update();

  window.onkeyup = keyUpHandler;
  window.onkeydown = keyDownHandler;
}

function addCatboy() {
  stage.removeChild(catboyText, owletteText, gekkoText);
  bitmap = new createjs.Bitmap(catboyImg);
  bitmap.x = 0;
  bitmap.y = 350;
  bitWidth = 107;
  bitHeight = 200;

  stage.addChild(background, splat, apple, bitmap, playerScore)
  stage.update();

  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);
}

function addOwlette() {
  stage.removeChild(catboyText, owletteText, gekkoText);
  bitmap = new createjs.Bitmap(owletteImg);
  bitmap.x = 0;
  bitmap.y = 350;
  bitWidth = 186;
  bitHeight = 200;

  stage.addChild(background, splat, apple, bitmap, playerScore)
  stage.update();

  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);
}

function addGekko() {
  stage.removeChild(catboyText, owletteText, gekkoText);
  bitmap = new createjs.Bitmap(gekkoImg);
  bitmap.x = 0;
  bitmap.y = 350;
  bitWidth = 120;
  bitHeight = 200;

  stage.addChild(background, splat, apple, bitmap, playerScore)
  stage.update();

  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);
}

function tick() {
  if (playerScore.text < 1500) {
    splat.x -= Math.random() * (4) + 1;
  } else {
    splat.x -= Math.random() * (10) + 5;
  }
  apple.x -= Math.random() * (4) + 1;
  bitmap.x += 1;
  move();
  if (bitmap.x > 900) {
    bitmap.x = -59;
    bitmap.y = 250;
  }
  if (bitmap.x < -100) {
    bitmap.x = -59;
    bitmap.y;
  }
  if (bitmap.y > 600) {
    bitmap.x = 0;
    bitmap.y = 250;
  }
  if (bitmap.y < -200) {
    bitmap.x = 0;
    bitmap.y = 250;
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

  if(playerScore.text > 2000) {
    winner();
  }

  if(playerScore.text < -500) {
    loser();
  }

}

function winner() {
  stage.removeChild(background, splat, apple, bitmap, playerScore);
  stage.update();
  var win = new createjs.Text('Winner', 'bold 60px Arial', '#f90014');
  win.x = 450;
  win.y = 450;
  stage.addChild(backgroundWin, win);
  stage.update();
}

function loser() {
  stage.removeChild(splat, apple, bitmap, playerScore);
  stage.update();
  var lose = new createjs.Text('Try Again', 'bold 60px Arial', '#f90014');
  lose.x = 400;
  lose.y = 300;
  stage.addChild(lose);
  stage.update();
}

function keyDownHandler(e) {
  switch(e.keyCode) {
    case KEYCODE_RIGHT: rightArrow = true; break;
    case KEYCODE_LEFT: leftArrow = true; break;
    case KEYCODE_UP: upArrow = true; break;
    case KEYCODE_DOWN: downArrow = true; break;
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
  if(downArrow) bitmap.y += 5;
  stage.update();
}
