// Exercício 1.
let a = 15;
let b = 10;

addition = a + b;
subtraction = a-b;
multiplication = a * b;
division = a / b;
mod = a % 2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(mod);


// Exercício 2.

let c = 5;
let d = 8;

if (c > d) {
  console.log(c)
} else if (c < d){
  console.log(d)
} else {
  console.log(c, "e", d, "são iguais")
}

// Exercício 3.

let e = 200;
let f = 350;
let g = 115;

if (e > f && e > g) {
  console.log(e)
} else if (e < f && f < g) {
  console.log(g)
} else {
  console.log(f)
}

// Exercício 4.

let h = 0;

if (h > 0) {
  console.log ("positive");
} else if (h < 0) {
  console.log ("negative")
} else {
  console.log ("zero");
}

// Exercício 5.

let i = 10;
let j = 160;
let k = 10;

if (i + j + k == 180 && i > 0 && j > 0 && k > 0) {
  console.log("true");
} else {
  console.log("false");
}

// Exercício 6.
let piece = 'rook'

switch (piece){
  case "king":
    console.log("One square in any direction");
  break;
  case "queen":
    console.log("Any number of squares in any direction");
  break;
  case "rook":
    console.log("Horizontally or vertically any number of squares");
  break;
  case "biship":
    console.log("Diagonals any number of squares");
  break;
  case "knight":
    console.log("L shape");
  break;
  case "pawn":
    console.log("vertically forward one square");
  break;
  default:
    console.log("error")
}


