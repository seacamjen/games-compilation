function init() {
  this.unusedPieces = [];
  this.usedPieces = [];

  var stage = new createjs.Stage("puzzleCanvas");
  var img = new Image();
  img.onload = createPuzzle;
  img.src = "assets/art/image.jpg";
  var blank = new createjs.Shape();
  blank.graphics.beginFill("gray").drawRect(0,0,150,150);
  blank.name = "blank";
  var missing = new createjs.Bitmap();

  function createPuzzle() {
      console.log(stage.children);
      createPieces();
      while (solved()) {shufflePieces();}
      removePiece();
      // if (!solvable()) {
      //
      // }
    // debugger;
    stage.update();
  }

  function createPieces() {
    var counter = 1;
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j ++) {
        var piece = new createjs.Bitmap(img);
        piece.sourceRect = new createjs.Rectangle(150 * i, 150 * j, 150, 150);
        piece.name = counter;
        counter++;
        piece.x = i * 150;
        piece.y = j * 150;
        piece.targetX = piece.x;
        piece.targetY = piece.y;
        piece.addEventListener("click", checkPiece);
        self.unusedPieces.push(piece);
        stage.addChild(piece);
        // console.log("linearPosition: " + linearPosition + "; name: " + name);
      }
    }
  }

  function shufflePieces() {
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        var index = Math.floor(Math.random() * unusedPieces.length);
        var piece = unusedPieces[index];
        unusedPieces.splice(index, 1);
        piece.x = i * 150;
        piece.y = j * 150;
      }
    }
  }

  function removePiece() {
    missing = stage.getChildAt(8);
    stage.removeChild(missing);
    blank.x = missing.x;
    blank.y = missing.y;
    stage.addChildAt(blank, 8);
  }

  function solvable() {
    var solvable = false;
    if (stage.children.length > 0) {
      var inversionCount = 0;
      for (i = 0; i < 9; i++) {
        var piece = stage.getChildAt(i);
        var position = piece.x + 3 * piece.y;
        if ((piece.name !== 'blank') && (piece.name > piece.x + 3 * piece.y)) {
          inversionCount += piece.name - piece.x - 3 * piece.y;
        }
      }
      console.log(inversionCount);
      if (inversionCount % 2 === 0) {
        solvable = true;
      }
    }
    return solvable;
  }

  function solved() {
    var solved = true;
    for (i = 0; i < 9; i++) {
      var piece = stage.getChildAt(i);
      if ((piece.x !== piece.targetX || piece.y !== piece.targetY) && piece.name !== 'blank') {
        solved = false;
      }
    }
    return solved;
  }

  function replacePiece() {
    index = stage.getChildIndex(blank);
    missing.x = blank.x;
    missing.y = blank.y;
    stage.removeChild(blank);
    stage.addChildAt(missing, index);
    stage.update();
  }

  function checkPiece(event) {
    clickedPiece = event.target;
    if (clickedPiece.x !== blank.x && clickedPiece.y !== blank.y) {
      alert("That piece won't move.");
    } else if ( clickedPiece.x === blank.x ) {
      vector = clickedPiece.y - blank.y;
      if (Math.abs(vector) === 150) {
        clickedPiece.y -= vector;
        blank.y += vector;
      }
    } else if ( clickedPiece.y === blank.y ) {
      vector = clickedPiece.x - blank.x;
      if (Math.abs(vector) === 150) {
        clickedPiece.x -= vector;
        blank.x += vector;
      }
    }
    stage.update();
    if (solved()) {
      replacePiece();
    }
  }
}
