var player = 'X';
var moves = 0;
var gameEnd = 0;
var matrix = [];
for (var i = 0; i < 3; ++i) {
  matrix[i] = [];
  for (var j = 0; j < 3; ++j) {
    matrix[i][j] = undefined;
  }
}

function gameUpdate(clickedButtonId) {
  moves++;
  var setPlayer = document.getElementById(clickedButtonId).innerHTML;
  if (document.getElementById(clickedButtonId).disabled === false) {

    document.getElementById(clickedButtonId).innerHTML = player;
    document.getElementById(clickedButtonId).disabled = true;

    var integerId = parseInt(clickedButtonId);
    var gridLine = parseInt(integerId / 3);
    var gridColumn = integerId % 3;
    matrix[gridLine][gridColumn] = player;

    playerCheck();
    if (moves > 4) {
      gameCheck();
    }
  }

}

function gameCheck() {
  for (var i = 0; i < 3; ++i) {
    if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] &&
      matrix[i][0] !== undefined) {
      colorLine(i);
      disableGrid();
      gameEnd = 1;
    }
  }

  for (var j = 0; j < 3; ++j) {
    if (matrix[0][j] === matrix[1][j] && matrix[1][j] === matrix[2][j] &&
      matrix[0][j] !== undefined) {
      colorColumn(j);
      disableGrid();
      gameEnd = 1;
    }
  }

  if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] &&
    matrix[0][0] !== undefined) {
    colorDiagonal(1);
    disableGrid();
    gameEnd = 1;
  }

  if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] &&
    matrix[0][2] !== undefined) {
    colorDiagonal(2);
    disableGrid();
    gameEnd = 1;
  }

  if (moves === 9 && gameEnd === 0) {
    disableGrid();
  }
}

function disableGrid() {
  for (var i = 0; i < 9; ++i) {
    document.getElementById(i).disabled = true;
  }
}

function colorLine(lineNumber) {
  document.getElementById(lineNumber * 3).style.backgroundColor = 'green';
  document.getElementById(lineNumber * 3 + 1).style.backgroundColor = 'green';
  document.getElementById(lineNumber * 3 + 2).style.backgroundColor = 'green';
}

function colorColumn(columnNumber) {
  document.getElementById(columnNumber).style.backgroundColor = 'green';
  document.getElementById(columnNumber + 3).style.backgroundColor = 'green';
  document.getElementById(columnNumber + 6).style.backgroundColor = 'green';
}

function colorDiagonal(diagonal) {
  if (diagonal === 1) {
    document.getElementById(0).style.backgroundColor = 'green';
    document.getElementById(4).style.backgroundColor = 'green';
    document.getElementById(8).style.backgroundColor = 'green';
  } else {
    document.getElementById(2).style.backgroundColor = 'green';
    document.getElementById(4).style.backgroundColor = 'green';
    document.getElementById(6).style.backgroundColor = 'green';
  }
}

function playerCheck() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
}
